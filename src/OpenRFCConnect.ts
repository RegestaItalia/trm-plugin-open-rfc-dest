import type { IConnect, RFCConnect } from "trm-commons";
import type { ISystemConnector } from "trm-core";
import { getCommons } from "./commons";

export type OpenRFCConnect = RFCConnect;

/**
 * Experimental RFC connection using open-rfc.
 *
 * It deliberately keeps the same persisted data and prompts as the standard
 * RFC connection.
 *
 * The class is defined on first use because RFCConnect comes from the host's
 * trm-commons, which a globally installed plugin can't require at load time.
 */
function defineOpenRFCConnect(BaseRFCConnect: typeof RFCConnect): new () => OpenRFCConnect {
    return class OpenRFCConnect extends BaseRFCConnect implements IConnect {

        name = "RFC";
        description = "RFC (Uses experimental open-rfc)";

        public getSystemConnector(): ISystemConnector {
            const { OpenRFCSystemConnector } = require("./OpenRFCSystemConnector") as typeof import("./OpenRFCSystemConnector");
            const data = this.getData();
            return new OpenRFCSystemConnector(data, data);
        }
    };
}

let openRFCConnectRef: (new () => OpenRFCConnect) | undefined;

export function getOpenRFCConnect(): new () => OpenRFCConnect {
    if (!openRFCConnectRef) openRFCConnectRef = defineOpenRFCConnect(getCommons().RFCConnect);
    return openRFCConnectRef;
}
