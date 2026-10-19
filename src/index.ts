import type { IConnect, PluginRegistrar } from "trm-commons";
import type * as TrmCore from "trm-core";
import { OpenRFCConnect } from "./OpenRFCConnect";
import { setCore } from "./core";

export default (on: PluginRegistrar["on"]): void => {
    on("client", "loadCore", (opts: { core: typeof TrmCore }) => {
        setCore(opts.core);
    });
    on("client", "onContextLoadConnections", (connections: IConnect[]) => {
        connections.push(new OpenRFCConnect());
        return connections;
    });
};

export { OpenRFCConnect } from "./OpenRFCConnect";
