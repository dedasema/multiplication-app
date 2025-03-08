import fs from 'fs'

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}

export interface Options {
    fileContent: string,
    destination?: string,
    fileName?: string
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repositoryL StorageRepository */
    ) { }

    execute({
        fileContent,
        destination = 'outputs',
        fileName = 'table'
    }: Options): boolean {

        try {
            if (!fs.existsSync(destination)) {
                fs.mkdirSync(destination, { recursive: true })
            }
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent)
            console.log('Archivo creado')
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }
}