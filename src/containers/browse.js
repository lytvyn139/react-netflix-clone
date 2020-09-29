import React, { useState, useEffect, useContext } from "react";
import { Card, Header, Loading, Player } from "../components";
import { SelectProfileContainer } from "./profiles";
import { FirebaseContext } from "../context/firebase";
import { FooterContainer } from "./footer";
import Fuse from "fuse.js";

import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function BrowseContainer({ slides }) {
    const [category, setCategory] = useState("series");
    const [searchTerm, setSearchTerm] = useState("");
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const { firebase } = useContext(FirebaseContext);
    const user = firebase.auth().currentUser || {};
    const [slideRows, setSlideRows] = useState([]);

    useEffect(() => {
        console.log("profile", profile);
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, [profile.displayName]);

    useEffect(() => {
        setSlideRows(slides[category]);
    }, [slides, category]);

    /* SEARCH BAR */
    useEffect(() => {
        const fuse = new Fuse(slideRows, {
            keys: ["data.description", "data.title", "data.genre"]
        });
        const results = fuse.search(searchTerm).map(({ item }) => item);

        if (
            slideRows.length > 0 &&
            searchTerm.length > 3 &&
            results.length > 0
        ) {
            setSlideRows(results);
        } else {
            setSlideRows(slides[category]);
        }
    }, [searchTerm]);
    /* SEARCH BAR */

    return profile.displayName ? (
        <>
            {loading ? (
                <Loading src={user.photoURL} />
            ) : (
                <Loading.ReleaseBody />
            )}
            <Header src="joker1" dontShowOnSmallViewPort>
                <Header.Frame>
                    {/* MOVIES  */}
                    <Header.Group>
                        <Header.Logo
                            to={ROUTES.HOME}
                            src={logo}
                            alt="Netflix"
                        />
                        <Header.TextLink
                            active={category === "series" ? "true" : "false"}
                            onClick={() => setCategory("series")}
                        >
                            Series
                        </Header.TextLink>
                        <Header.TextLink
                            active={category === "films" ? "true" : "false"}
                            onClick={() => setCategory("films")}
                        >
                            Films
                        </Header.TextLink>
                    </Header.Group>

                    <Header.Group>
                        {/* SEARCH  */}
                        <Header.Search
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                        ></Header.Search>
                        {/* SEARCH  */}

                        {/* PROFILE  */}
                        <Header.Profile>
                            <Header.Picture src={user.photoURL} />
                            <Header.Dropdown>
                                <Header.Group>
                                    <Header.Picture src={user.photoURL} />
                                    <Header.TextLink>
                                        {user.displayName}
                                    </Header.TextLink>
                                </Header.Group>
                                {/* DROP  */}
                                <Header.Group>
                                    <Header.TextLink
                                        onClick={() =>
                                            firebase.auth().signOut()
                                        }
                                    >
                                        Sign Out
                                    </Header.TextLink>
                                </Header.Group>
                                {/* DROP  */}
                            </Header.Dropdown>
                        </Header.Profile>
                    </Header.Group>
                    {/* PROFILE  */}
                </Header.Frame>

                <Header.Feature>
                    <Header.FeatureCallOut>
                        Watch Joker Now
                    </Header.FeatureCallOut>
                    <Header.Text>
                        Forever alone in a crowd, failed comedian Arthur Fleck
                        seeks connection as he walks the streets of Gotham City.
                        ⁠{" "}
                    </Header.Text>
                    <Header.PlayButton>Play</Header.PlayButton>
                </Header.Feature>
            </Header>
            {/* CARD */}
            <Card.Group>
                {slideRows.map((slideItem) => (
                    <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
                        <Card.Title>{slideItem.title}</Card.Title>
                        <Card.Entities>
                            {slideItem.data.map((item) => (
                                <Card.Item key={item.docId} item={item}>
                                    <Card.Image
                                        src={`/images/${category}/${item.genre}/${item.slug}/small.jpg`}
                                    />
                                    <Card.Meta>
                                        <Card.SubTitle>
                                            {item.title}
                                        </Card.SubTitle>
                                        <Card.Text>
                                            {item.description}
                                        </Card.Text>
                                    </Card.Meta>
                                </Card.Item>
                            ))}
                        </Card.Entities>
                        <Card.Feature category={category}>
                            <Player>
                                <Player.Button />
                                <Player.Video src="/videos/emotions.mp4" />
                            </Player>
                        </Card.Feature>
                    </Card>
                ))}
            </Card.Group>
            {/* CARD */}
            <FooterContainer />;
        </>
    ) : (
        /* ====================== */
        <SelectProfileContainer user={user} setProfile={setProfile} />
    );
}
