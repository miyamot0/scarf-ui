import * as pack from '../../package.json'
const version = pack.version

export const Footer = () => {
    return (
        <footer className="w-full justify-center flex flex-col gap-y-2 my-4">
            <span className="text-center">
                <a href="mailto:sgilroy1@lsu.edu" className="text-blue-600">
                    Dr. Shawn P. Gilroy, Ph.D. NCSP BCBA-D
                </a>
                , Louisiana State University
            </span>
            <span className="text-center">
                <a
                    href="mailto:jennifer.ledford@vanderbilt.edu"
                    className="text-blue-600"
                >
                    Dr. Jennifer Ledford, Ph.D. BCBA-D
                </a>
                , Vanderbilt University
            </span>
            <span className="text-center">{`Version ${version}`}</span>
        </footer>
    )
}
