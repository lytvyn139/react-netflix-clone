import React from "react";
import { ProtectedRoute } from "../helpers/routes";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";

export default function Browse() {
    const { series } = useContent("series");
    const { films } = useContent("films");
    const slides = selectionFilter({ series, films });
    console.log(slides);
    return <BrowseContainer slides={slides} />;
}
