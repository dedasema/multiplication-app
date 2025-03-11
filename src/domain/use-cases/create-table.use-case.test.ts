import { executionAsyncId } from 'async_hooks'
import { CreateTable } from './create-table.use-case'

describe('CreateTableUseCases', () => {
    test('should create table with default values', () => {
        const createTable = new CreateTable()
        const table = createTable.execute({ base: 2 })
        const rows = table.split('\n').length
        expect( createTable ).toBeInstanceOf( CreateTable )
    })

    test('shoul create table with custom values', () => {

        const createTable = new CreateTable()
        
        const options = {
            base: 3,
            limit: 20
        }

        const table = createTable.execute(options)
        const rows = table.split('\n').length

        expect( table ).toContain('3 x 1 = 3')
        expect( table ).toContain('3 x 10 = 30')
        expect( table ).toContain('3 x 20 = 60')

        expect( rows ).toBe( options.limit )
    })
})