
import { yarg } from "./config/plugin/args.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv)

// console.log(yarg)

(async() => {
    await main()
    console.log('final')
})()


async function main() {
    const { b:base, l:limit, s:showTable, n:name, d:destination } = yarg
    console.log(yarg)
    ServerApp.run({ base, limit, showTable, name, destination})
}
