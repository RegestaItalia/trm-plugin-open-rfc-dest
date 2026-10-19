import type { IConnect, PluginRegistrar } from "trm-commons";
import type * as TrmCore from "trm-core";
import type * as TrmCommons from "trm-commons";
import { getOpenRFCConnect } from "./OpenRFCConnect";
import { setCore } from "./core";
import { setCommons } from "./commons";

export default (on: PluginRegistrar["on"]): void => {
    on("client", "loadCore", (opts: { core: typeof TrmCore }) => {
        setCore(opts.core);
    });
    on("client", "loadCommons", (opts: { commons: typeof TrmCommons }) => {
        setCommons(opts.commons);
    });
    on("client", "onContextLoadConnections", (connections: IConnect[]) => {
        const OpenRFCConnect = getOpenRFCConnect();
        connections.push(new OpenRFCConnect());
        return connections;
    });
};

export { getOpenRFCConnect, type OpenRFCConnect } from "./OpenRFCConnect";
