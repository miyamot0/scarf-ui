var fs = require('fs')
const pack = require('../package.json')
const coverage = require('../coverage/coverage-summary.json')

const PATH_README_TEMPLATE = './__readme__/README.md'
const PATH_README_OUTPUT = './README.md'

const TAG_LICENSE = '{{ License }}'
const TAG_VERSION = '{{ Version }}'
const TAG_COVERAGE = '{{ Coverage }}'

const assign_color = (percentage: number) => {
    let color = 'red'

    if (percentage > 80) {
        color = 'yellow'
    } else if (percentage > 90) {
        color = 'green'
    }

    return color
}

function GenerateMITLicenseBadge() {
    return '![Static Badge](https://img.shields.io/badge/License-MIT-green?style=flat)'
}

function GeneratePackageVersionBadge() {
    return `![Static Badge](https://img.shields.io/badge/Version-${pack.version}-blue?style=flat)`
}

function GenerateCoverageBadge() {
    let color = assign_color(coverage.total.lines.pct)

    return `![Static Badge](https://img.shields.io/badge/Coverage-${coverage.total.lines.pct}-${color}?style=flat)`
}

function readTemplatedREADME(): string {
    const result = fs.readFileSync(
        PATH_README_TEMPLATE,
        'utf8',
        function (err: any, data: string) {
            if (err) throw err

            return data
        }
    )

    return result
}

function writeUpdatedREADMEData() {
    console.log('Building Updated Readme...')

    let md_data = readTemplatedREADME()
    md_data = md_data.replace(TAG_VERSION, GeneratePackageVersionBadge())
    md_data = md_data.replace(TAG_LICENSE, GenerateMITLicenseBadge())
    md_data = md_data.replace(TAG_COVERAGE, GenerateCoverageBadge())

    fs.writeFileSync(PATH_README_OUTPUT, md_data, function (err: any) {
        if (err) throw err
    })

    console.log('Readme updated!')
}

writeUpdatedREADMEData()
