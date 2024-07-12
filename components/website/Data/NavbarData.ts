
export interface Navlink {
    id: number,
    url: string,
    linktag: string,
}

const Navmenu: Navlink[] = [
    {
        id: 1,
        url: "/",
        linktag: "Home"
    },
    {
        id: 2,
        url: "/About",
        linktag: "About"
    },
    {
        id: 3,
        url: "/Usage",
        linktag: "Usage"
    },
    {
        id: 4,
        url: "/Team",
        linktag: "Our Team"
    },
]

export default Navmenu