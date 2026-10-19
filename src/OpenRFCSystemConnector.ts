import { getCore } from "./core";

const Core = getCore();

/** RFC connector backed by open-rfc instead of the SAP NW RFC SDK. */
export class OpenRFCSystemConnector extends Core.RFCSystemConnector {

    protected createClient(rfcClientArgs: any, cLangu: string, traceDir?: string): import("trm-core").RFCClient {
        return new Core.RFCClient(
            rfcClientArgs,
            cLangu,
            traceDir,
            undefined,
            () => import("open-rfc")
        );
    }
}
