import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location'

export default useLocation = () => {
    const [location, setlocation] = useState(0,0)

    const getLocation = async () => {
        try { 
            const { granted } = await Location.requestPermissionsAsync();
            if (!granted) return;
            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();
            setlocation({ latitude, longitude })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        getLocation();
    }, [])

    return location;
};