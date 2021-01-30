const ns = {
    get: async (nsId: string) => {
        return `hello${nsId}`
    }
}

const unit = {
    get: async (unitId: string) => {
        return `unit`
    }

}

export default
{
    ns,
    unit
}

