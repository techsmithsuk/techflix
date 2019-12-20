export function getUrl(relativePath) {
    if (typeof window === 'undefined') {
        return process.env.API_URL + relativePath;
    }
    return process.env.API_PUBLIC_URL + relativePath;
}