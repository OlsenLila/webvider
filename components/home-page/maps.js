import {useEffect, useRef} from 'react';
import {Loader} from '@googlemaps/js-api-loader';
import classes from './maps.module.css';
import Link from 'next/link';

function HomePagetoo() {
    const googlemap = useRef(null);
    useEffect(() => {
        const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_API_KEY,
        version: 'weekly',
        });
        let map; 
        loader.load().then(() => {
        const google = window.google;
        map = new google.maps.Map(googlemap.current, {
            center: {lat: 41.32953, lng: 19.81482},
            zoom: 14,
        });
        new google.maps.Marker({
            position: {lat: 41.32953, lng: 19.81482},
            map,
            title: "Codevider",
          });
        });
    });
    return (
        <section>
        <div className={classes.map}>
            <div className={classes.map1}>
                <div className={classes.map2}>
                    <div className={classes.map4}>
                        <h4>Our Address</h4>
                        <h5>Rruga Brigada 8, Pallati TeknoProjekt, Hyrja 2, Ap 1 Tirana, Albania.</h5>
                        <Link href="/maps"><h6>Get Directions</h6></Link>
                    </div>
                    <div className={classes.map4}>
                        <h4>Our Phone</h4>
                        <h5>Office Telephone : +1 224-788-0689 Mobile : +355 695877742</h5>
                        <Link href="callto: +355695877742"><h6>Call Us</h6></Link>
                    </div>
                    <div className={classes.map4}>
                        <h4>Our Email</h4>
                        <h5>Main Email : info@codevider.com HR : hr@codevider.com</h5>
                        <Link href="mailto: info@codevider.com"><h6>Send a Message</h6></Link>
                    </div>
                </div>
            </div>
            <div className={classes.map1}>
                <h3>Get Directions</h3>
                <div className={classes.map3} ref={googlemap} />
            </div>
        </div>
    <div className={classes.footnote}>© 2023 CodeVider.</div>
    </section>
    );
}

export default HomePagetoo;