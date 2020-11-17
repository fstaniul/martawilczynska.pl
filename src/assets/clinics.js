import React from 'react';
import {FormattedMessage} from "react-intl";

const CLINICS = [
    {
        contact: {
            name: <FormattedMessage id="contact.info.dr-marta-office.name"/>,
            street: 'Malownicza 5',
            town: '54-081 Wrocław',
            phone: '+48 501 531 926',
            email: 'kontakt@martawilczynska.pl',
            note: <FormattedMessage id="contact.info.dr-marta-office.note"/>,
            map:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.453290270165!2d16.878483215482962!3d51.17386777958174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470f9521a4866fb7%3A0xb444b5e511901b18!2sMalownicza%205%2C%2054-081%20Wroc%C5%82aw!5e0!3m2!1sen!2spl!4v1605642733764!5m2!1sen!2spl',
        },
        mapPin: {text: 'Wrocław', pos: {x: 120, y: 270}}
    },
    {
        contact: {
            name: 'Hauzer Clinic',
            street: 'Orla 5c',
            town: '55-010 Żerniki Wrocławskie',
            phone: '+48 570 200 916',
            email: 'kontakt@hauzerclinic.com',
            map:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.851322087731!2d17.06160701547709!3d51.03736667956069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc348d325b88d%3A0xacb464c0137f455c!2sOrla%205c%2C%2055-010%20%C5%BBerniki%20Wroc%C5%82awskie!5e0!3m2!1sen!2spl!4v1605642948332!5m2!1sen!2spl',
        },
        mapPin: {text: 'Żerniki Wrocławskie', pos: {x: 130, y: 290}}
    },
    {
        contact: {
            name: 'Chiroplastica',
            street: 'Królewiecka 161 / 17',
            town: '54-117 Wrocław',
            phone: '+48 535 532 238',
            email: 'info@chiroplastica.pl',
            map:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2502.4725881225913!2d16.921842115482146!3d51.15507627957877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc27b2b70b461%3A0xa29a4a12dec16fe2!2sDolno%C5%9Bl%C4%85skie%20Centrum%20Chirurgii%20R%C4%99ki%20i%20Medycyny%20Estetycznej%20Chiroplastica%20Ahmed%20Elsaftawy!5e0!3m2!1sen!2spl!4v1605643439554!5m2!1sen!2spl',
        },
    },
    {
        contact: {
            name: 'Dr Olender - Prywatny Szpital Chirurgi Plastycznej',
            street: 'Brzozowa 2',
            town: '42-311 Żarki Letnisko',
            phone: (
                <>
                    +48 515 296 215
                    <br/>
                    +48 34 311 10 32
                </>
            ),
            email: 'kontakt@drolender.pl',
            map:
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2531.2773318205855!2d19.26749961585282!3d50.6219646828724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717310e7529f0f5%3A0xc833babbcd4b7a23!2sDr+Olender+Prywatny+Szpital+Chirurgii+Plastycznej!5e0!3m2!1spl!2sus!4v1554654822530!5m2!1spl!2sus'
        },
        mapPin: {text: 'Żarki Letnisko', pos: {x: 255, y: 330}}
    },
];

export default CLINICS;
