// import { yarg } from './args.plugin'

import { before } from 'node:test'

const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args]
    const { yarg } = await import('./args.plugin')
    return yarg
}

describe('Test args.plugin.ts', () => {

    const originalArgv = process.argv

    beforeEach(() => {
        process.argv = originalArgv
        jest.resetModules()
    })

    test('should return default values', async () => {
        const argv = await runCommand(['-b', '3'])
        expect({ argv }).toEqual(expect.objectContaining({
            b: 3,
            l: 10,
            s: false,
            n: 'multiplication-table',
            d: 'outputs'
        }))
    })

    test('should return configuration with custom values', async() => {
        const argv = await runCommand(['-b', '3', '-l', '5', '-s', '-n', 'custom-name', '-d', 'custom-dir'])
        expect({ argv }).toEqual(expect.objectContaining({
            b: 3,
            l: 5,
            s: true,
            n: 'custom-name',
            d: 'custom-dir'
        }))
    })
})