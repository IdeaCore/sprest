declare module $REST.Types {
    /**
     * Folder
     */
    interface IFolder extends IBase {
        /**
         * Properties
         */

        /** Specifies the sequence in which content types are displayed. */
        ContentTypeOrder: string;

        /**
         * Gets the files contained in the folder.
         */
        Files(): IFiles;

        /**
         * Gets the file contained in the folder.
         * @param url - The url of the file within the current folder.
         */
        Files(url:string): IFile;

        /**
         * Gets the folders contained in the list folder.
         */
        Folders(): IFolders;

        /**
         * Gets the folder contained in the list folder.
         * @param url - The url of the sub-folder within the current folder.
         */
        Folders(url:string): IFolder;

        /** Gets a value that specifies the count of items in the list folder. */
        ItemCount: string;

        /**
         * Specifies the list item field (2) values for the list item corresponding to the file.
         */
        ListItemAllFields(): any;

        /** Gets the name of the folder. */
        Name: string;

        /**
         * Gets the parent list folder of the folder.
         */
        ParentFolder(): IFolder;

        /**
         * Gets the collection of all files contained in the folder.
         */
        Properties(): any;

        /** Gets the server-relative URL of the list folder. */
        ServerRelativeUrl: string;

        /** Gets or sets a value that specifies the content type order. */
        UniqueContentTypeOrder: string;

        /** Gets or sets a value that specifies folder-relative URL for the list folder welcome page. */
        WelcomePage: string;

        /**
         * Methods
         */

        /**
         * Deletes the folder.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IFolder;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IFolder;

        /**
         * Get the file at the specified URL.
         * @param serverRelativeUrl - The server-relative URL of the folder.
         */
        getByUrl(serverRelativeUrl): IFolder;

        /**
         * Moves the list folder to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Updates it's properties.
         * @param data - The file properties to update.
         */
        update(data): any;
    }
}
