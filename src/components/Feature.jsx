import React from 'react';
import FeatureBox from './FeatureBox';
import featureimage1 from '../images/feature_1.png';
import featureimage2 from '../images/feature_2.png';
import featureimage3 from '../images/feature_3.png';

const Feature = () => {
    return (
        <div id="features">
            <div className="a-container">
                <FeatureBox image={featureimage1} title='Development Course' />
                <FeatureBox image={featureimage2} title='Money Saving Service' />
                <FeatureBox image={featureimage3} title='Usability Interface' />
            </div>
        </div>
    )
}

export default Feature;
