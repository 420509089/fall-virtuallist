let pages: { [key: string]: string } = {
    main: "/",
    svgDemo: "/svgDemo",
};
const Config = {
    pages: {} as { [key: string]: string }
};
for (const [key, value] of Object.entries(pages)) {
    Config.pages[key] = value;
}
export default Config;