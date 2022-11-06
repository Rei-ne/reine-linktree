import React from 'react'

import slack from "../images/slack.png";
import github from "../images/github.png";
import share from "../images/shareBtn.png";
import webHover from "../images/camera-01.svg";
import cursor from "../images/Cursor.svg";
import tooltip from "../images/Tooltip.svg";
import shareMobile from "../images/moreMobile.png";
import favicon from '../images/favicon.ico'

import { useNavigate } from 'react-router-dom';



const Homepage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="mainSection">
                    <div className="profileSection">
                        <div className="profileCon">

                            <div className="profileOverlay">
                                <img id="camera" src={webHover} alt="profile camera" />

                            </div>
                            <img id="profile_img" src={favicon} alt="profile image" />
                        </div>
                        <div className="shareCon">
                            <div className="inner" id="desktop">
                                <img className="tooltip" src={tooltip} />
                                <img className="shareButton" src={share} />
                                <img className="cursor" src={cursor} />

                            </div>
                            {/* share mobile */}
                            <div className="shareMobile">
                                <img className="shareButton" id="mobile" src={shareMobile}

                                />

                            </div>
                        </div>  {/* end of share button*/}
                        <h3 id="twitter">Reine Dev</h3>
                        <h3 id="slack">Reine</h3>
                    </div> {/* end of profile section */}


                    <div className="linkSection">

                        <a target="_blank" href="https://twitter.com/Reine_Dev">
                            Twitter Link</a>
                        <a target="_blank" href="https://training.zuri.team/" id="btn__zuri">Zuri Team</a>
                        <a target="_blank" href="http://books.zuri.team/" id="books" title="">Zuri Books
                        </a>
                        <a target="_blank" href="https://books.zuri.team/python-for-beginners?ref_id=Reine" id="book__python">Python Books
                        </a>
                        <a target="_blank" href="https://background.zuri.team/" id="pitch">Background Check for Coders
                        </a>
                        <a target="_blank" href="https://books.zuri.team/design-rules" id="book_design">Design Books
                        </a>
                        <a target="_blank" onClick={() => navigate("/contact")} id="contact">Contact me
                        </a>

                    </div>

                </div>  {/* end of main section */}
                <div className="socialSection">

                    <img src={slack} />

                    <img src={github} />


                </div> {/* end of social section */}
            </div>

        </>

    );
}

export default Homepage