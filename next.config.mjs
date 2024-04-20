import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

const millionConfig = {
    auto: {
        threshold: 0.05, // default: 0.1,
        skip: ['useBadHook', /badVariable/g], // default []
        rsc: true,
        // if you're using RSC: auto: { rsc: true },
    },
}

export default nextConfig
