
import { ServerApp } from './server-app'

describe('Server App', () => {
    test('should create ServerApp instance', () => {
        const serverApp = new ServerApp()
        expect( serverApp ).toBeInstanceOf(ServerApp)
    })
})