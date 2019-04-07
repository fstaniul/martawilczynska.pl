import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import axios from 'axios';

const TestimonialsContext = createContext();

const TESTIMONIALS_URL = '/api/testimonials';
const ACTIONS = {
  LOADING: 'LOADING',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
};

function loadTestimonials(skip) {
  return axios.get(TESTIMONIALS_URL, { params: { skip: skip || 0 } });
}

export function useTestimonials() {
  const context = useContext(TestimonialsContext);
  useEffect(() => {
    if (!context.loaded) context.load();
  }, []);
  return context;
}

function testimonialsStateReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true, error: null };

    case ACTIONS.SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        testimonials: [...state.testimonials, ...payload.testimonials],
        count: payload.count,
        error: null
      };

    case ACTIONS.FAILURE:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
}

export function TestimonialsProvider({ children }) {
  const [{ loaded, loading, testimonials, count, error }, setState] = useReducer(testimonialsStateReducer, {
    loading: false,
    loaded: false,
    error: null,
    testimonials: [],
    count: 0
  });

  const load = useCallback(() => {
    if (loading) return;
    setState({ type: ACTIONS.LOADING });
    loadTestimonials(testimonials.length).then(
      response => {
        setState({ type: ACTIONS.SUCCESS, payload: response.data });
      },
      error => {
        setState({ type: ACTIONS.FAILURE, payload: error });
      }
    );
  }, [testimonials]);

  return (
    <TestimonialsContext.Provider value={{ loaded, loading, testimonials, count, load, error }}>
      {children}
    </TestimonialsContext.Provider>
  );
}
