import { RFCConnect, type IConnect } from "trm-commons";
import type { ISystemConnector } from "trm-core";

/**
 * Experimental RFC connection using open-rfc.
 *
 * It deliberately keeps the same persisted data and prompts as the standard
 * RFC connection.
 */
export class OpenRFCConnect extends RFCConnect implements IConnect {

    name = "RFC";
    description = "RFC (Uses experimental open-rfc)";

    public getSystemConnector(): ISystemConnector {
        const { OpenRFCSystemConnector } = require("./OpenRFCSystemConnector") as typeof import("./OpenRFCSystemConnector");
        const data = this.getData();
        return new OpenRFCSystemConnector(data, data);
    }
}
