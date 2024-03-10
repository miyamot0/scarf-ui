import * as pack from '../../package.json'
const version = pack.version

export const Footer = () => {
    return (
        <footer className="w-full justify-center flex flex-col gap-y-2 my-4">
            <span className="text-center">Designed by Shawn Gilroy</span>
            <span className="text-center">{`Version ${version}`}</span>
        </footer>
    )
}
