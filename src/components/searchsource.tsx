import type { Manga as MangaType } from "types/manga";
import Manga from "components/manga";
import { StyleSheet, css } from "aphrodite";
import { Button, Icon, Text, Tooltip } from "@chakra-ui/react";

import { ViewOffIcon } from "@chakra-ui/icons";

type SearchSourceProps = {
    sourceName: string;
    sourceIcon: string;

    sourceManga: MangaType[];
    maxMangaToShow?: number;
};

const SearchSource = (props: SearchSourceProps) => {
    const { sourceName, sourceIcon, sourceManga, maxMangaToShow = 7 } = props;
    const styles = StyleSheet.create({
        main: {
            display: "flex",
            flexDirection: "column",
            paddingLeft: "8px",
            paddingRight: "8px",
            boxSizing: "border-box",
            marginTop: "16px",
        },
        meta: {
            display: "flex",
            flexDirection: "row",
            verticalAlign: "center",
        },
        icon: {
            width: "72px",
            height: "72px",
            backgroundColor: "rgb(18, 30, 42)",
            padding: "4px",
            borderRadius: "4px",
            display: "flex",
            justifyContent: "center",
            verticalAlign: "center",
            alignItems: "center",
            flexDirection: "column",
            marginRight: "4px",
            cursor: "pointer",
        },
        img: {
            maxWidth: "42px",
            maxHeight: "42px",
        },
        name: {
            fontSize: "24px",
        },
        namecontainer: {
            display: "flex",
            flexDirection: "column",
            marginLeft: "8px",
        },
        text: {
            verticalAlign: "middle",
            display: "inline-flex",
            alignItems: "center",
            color: "whitesmoke",
        },
        manga: {
            display: "flex",
            flexDirection: "row",
            backgroundColor: "rgb(18, 30, 42)",
            width: "100%",
            height: "fit-content",
            minHeight: "250px",
            marginTop: "16px",
            borderRadius: "4px",
            padding: "16px",
            overflowX: "auto",
            overflowY: "hidden",
            justifyContent: "space-around",
        },
        mangacount: {
            marginTop: "-4px",
        },
        count: {
            color: "#f88379",
        },

        seeMore: {
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#fb8e84",
            borderRadius: "4px 4px 2px 2px",
            marginLeft: "6px",
            width: "200px",
            height: "284px",

            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        },

        viewOff: {},

        seeMoreText: {
            fontFamily: "Cascadia Code",
            marginTop: "16px",
            color: "white",
        },
    });

    const mangaToShow = sourceManga.slice(0, maxMangaToShow).map((manga) => {
        return <Manga key={`${manga.source}-${manga.id}`} {...{ manga }} />;
    });

    if (maxMangaToShow < sourceManga.length) {
        mangaToShow.push(
            <button
                key={`${sourceName}-showMore`}
                className={css(styles.seeMore)}
            >
                <ViewOffIcon
                    color="#ffffff"
                    width="64px"
                    height="64px"
                    className={css(styles.viewOff)}
                />
                <Text pointerEvents="none" className={css(styles.seeMoreText)}>
                    See More
                </Text>
            </button>
        );
    }

    return (
        <div className={css(styles.main)}>
            <div className={css(styles.meta)}>
                <Tooltip label="Click to search using this source.">
                    <div className={css(styles.icon)}>
                        <img className={css(styles.img)} src={sourceIcon} />
                    </div>
                </Tooltip>
                <div className={css(styles.namecontainer)}>
                    <span className={css(styles.name, styles.text)}>
                        {sourceName}
                    </span>
                    <span className={css(styles.text, styles.mangacount)}>
                        <span className={css(styles.count)}>
                            {sourceManga.length}&nbsp;
                        </span>
                        Manga
                    </span>
                </div>
            </div>
            <div className={css(styles.manga)}>{mangaToShow}</div>
        </div>
    );
};

export default SearchSource;
