import fs from 'fs'

export interface SaveFileUseCase {
    execute: (options: Options) => boolean
}

export interface Options {
    fileContent: string,
    fileDestination?: string,
    fileName?: string
}

export class SaveFile implements SaveFileUseCase {
    constructor(
        /** repositoryL StorageRepository */
    ) { }

    execute({
        fileContent,
        fileDestination = 'outputs',
        fileName = 'table'
    }: Options): boolean {

        try {
            if (!fs.existsSync(fileDestination)) {
                fs.mkdirSync(fileDestination, { recursive: true })
            }
            fs.writeFileSync(`${fileDestination}/${fileName}.txt`, fileContent)
            console.log('Archivo creado')
            return true
        } catch (error) {
            // console.error(error)
            console.error('Error al guardar el archivo')
            return false
        }
    }
}