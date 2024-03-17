var fs = require('fs')
const pack = require('../package.json')
const coverage = require('../coverage/coverage-summary.json')

const readme_read_path = './__readme__/README.md'
const readme_write_path = './README.md'

const License_tag = '{{ License }}'
const MIT_license =
    '![Static Badge](https://img.shields.io/badge/License-MIT-green?style=flat)'

const Version_tag = '{{ Version }}'
const Version = (version: string) =>
    `![Static Badge](https://img.shields.io/badge/Version-${version}-blue?style=flat)`

const Coverage_tag = '{{ Coverage }}'
const Coverage = () => {
    const { lines } = coverage.total
    const percentage = lines.pct

    let color = 'red'

    if (percentage > 80) {
        color = 'yellow'
    } else if (percentage > 90) {
        color = 'green'
    }

    return `![Static Badge](https://img.shields.io/badge/Coverage-${percentage}-${color}?style=flat)`
}

function readTemplatedREADME(): string {
    const result = fs.readFileSync(
        readme_read_path,
        'utf8',
        function (err: any, data: string) {
            if (err) throw err

            return data
        }
    )

    return result
}

function writeData() {
    console.log('Current working directory:', process.cwd())

    let md_data = readTemplatedREADME()
    md_data = md_data.replace(Version_tag, Version(pack.version))
    md_data = md_data.replace(License_tag, MIT_license)
    md_data = md_data.replace(Coverage_tag, Coverage())

    console.log(md_data)
    fs.writeFileSync(readme_write_path, md_data, function (err: any) {
        if (err) throw err

        console.log('Readme updated!')
    })
}

writeData()
