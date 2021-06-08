import * as linodeApi from "@linode/api-v4";
import * as program from "commander";

let linode: linodeApi.Linode;

program.
    command("say").
    option("--message <string>", "What should I say?", String).
    action(programAction);

interface ActionConfig {
    message: string;
}
async function programAction({
    message,
}: ActionConfig) {

    console.log(message);
}
