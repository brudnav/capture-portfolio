import React from "react";
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

import styled from "styled-components";
import { Link } from "react-router-dom";

const OurWork = () => {
    return(
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                    <Link>
                        <img src={athlete} alt="" />
                    </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"> </div>
                    <Link>
                        <img src={theracer} alt="" />
                    </Link>
            </Movie>
            <Movie>
                <h2>Good Times</h2>
                <div className="line"></div>
                    <Link>
                        <img src={goodtimes} alt="" />
                    </Link>
            </Movie>
        </Work>

        
    )
}

const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 2rem;

    h2{
        padding: 1rem 0rem
    }
`
const Movie = styled.div`
    padding-bottom: 10rem;
    .line{
        height: 0.5rem;
        background: #cccccc;
        margin-bottom: 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork;