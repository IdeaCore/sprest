module $REST {
    /*********************************************************************************************************************************/
    // Methods
    /*********************************************************************************************************************************/
    Library.files = {
        // Adds a file to this collection.
        add: {
            argNames: ["overwrite", "url"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Adds a ghosted file to an existing list or document library.
        // Template File Types: StandardPage = 0; WikiPage = 1; FormPage = 2
        addTemplateFile: {
            argNames: ["urlOfFile", "templateFileType"],
            requestType: Types.RequestType.PostWithArgs
        },

        // Get the file at the specified URL.
        getByUrl: {
            argNames: ["serverRelativeUrl"],
            requestType: Types.RequestType.GetWithArgsValueOnly,
            returnType: "file"
        },

        // Queries the collection
        query: {
            argNames: ["oData"],
            requestType: Types.RequestType.OData
        }
    };
}
