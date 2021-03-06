declare module $REST.Types {
    /**
     * User Custom Action
     */
    interface IUserCustomAction extends IBase {
        /**
         * Properties
         */

        /** Gets or sets a value that specifies an implementation specific XML fragment that determines user interface properties of the custom action. */
        CommandUIExtension: string;

        /** Gets or sets the description of the custom action. */
        Description: string;

        /** Gets or sets a value that specifies an implementation-specific value that determines the position of the custom action in the page. */
        Group: string;

        /** Gets a value that specifies the identifier of the custom action. */
        Id: string;

        /** Gets or sets the URL of the image associated with the custom action. */
        ImageUrl: string;

        /** Gets or sets the location of the custom action. */
        Location: string;

        /** Gets or sets the name of the custom action. */
        Name: string;

        /** Gets or sets the value that specifies the identifier of the object associated with the custom action. */
        RegistrationId: string;

        /** Gets or sets the value that specifies the type of object associated with the custom action. Represents an SP.UserCustomActionRegistrationType value: None = 0; List = 1; ContentType = 2; ProgId = 3; FileType = 4. */
        RegistrationType: string;

        /** Gets or sets the value that specifies the permissions needed for the custom action. */
        Rights: string;

        /** Gets a value that specifies the scope of the custom action. */
        Scope: string;

        /** Gets or sets the value that specifies the ECMAScript to be executed when the custom action is performed. */
        ScriptBlock: string;

        /** Gets or sets a value that specifies the URI of a file which contains the ECMAScript to execute on the page. */
        ScriptSrc: string;

        /** Gets or sets the value that specifies an implementation-specific value that determines the order of the custom action that appears on the page. */
        Sequence: string;

        /** Gets or sets the display title of the custom action. */
        Title: string;

        /** Gets or sets the URL, URI, or ECMAScript (JScript, JavaScript) function associated with the action. */
        Url: string;

        /** Gets a value that specifies an implementation specific version identifier. */
        VersionOfUserCustomAction: string;

        /**
         * Methods
         */

        /**
         * Deletes the user custom action.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IUserCustomAction;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IUserCustomAction;
    }
}
