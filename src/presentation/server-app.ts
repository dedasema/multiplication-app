import { CreateTable } from "../domain/use-cases/create-table.use-case"
import { SaveFile } from "../domain/use-cases/save-file.use-case"


interface RunOptions {
    base: number,
    limit: number,
    showTable: boolean,
    name: string,
    fileDestination: string
}

export class ServerApp {
    static run({base, limit, showTable, name, fileDestination}: RunOptions) {
        console.log('Servidor corriendo...')
        const table = new CreateTable()
            .execute({
                base, 
                limit
            })
            
        const wasCreated = new SaveFile()
            .execute({
                fileContent: table,
                fileName: name,
                fileDestination
            })
            
        if ( showTable )  console.log(table)
        
        wasCreated
            ? console.log('Archivo creado')
            : console.error('Archivo no creado')
    }
}