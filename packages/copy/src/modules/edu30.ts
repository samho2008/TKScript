import utils from "../utils/utils";
import { Website } from "../websites";

const website: Website = {
    regexp: /.*30edu\.com\.cn\/.+/,
    init: function () {
        window.onload = () => {
            const iframes = document.getElementsByTagName("iframe");
            if (iframes.length === 2) {
                const body = iframes[1].contentWindow.document.querySelector("body");
                utils.removeAttributes(body, ["oncopy", "oncontextmenu", "onselectstart"]);
            }
        };
    },
};

export default website;
