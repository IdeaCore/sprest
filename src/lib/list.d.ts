declare module $REST.Types {
    /**
     * List
     */
    interface IList extends IBase {
        /**
         * Constructor
         * @param listName - The name of the list.
         * @param targetInfo - (Optional) The target information.
         */
        new(listName:string, targetInfo?:Settings.TargetInfoSettings): IList;

        /**
         * Properties
         */

        /** Gets a value that specifies whether the list supports content types. */
        AllowContentTypes: string;

        /** Gets the list definition type on which the list is based. Represents a ListTemplateType value. See ListTemplateType in the .NET client object model reference for template type values. */
        BaseTemplate: string;

        /** Gets the base type for the list. Represents an SP.BaseType value: Generic List = 0; Document Library = 1; Discussion Board = 3; Survey = 4; Issue = 5. */
        BaseType: string;

        /**
         * Gets a value that specifies the override of the web application's BrowserFileHandling property at the list level. Represents an SP.BrowserFileHandling value: Permissive = 0; Strict = 1.
         */
        BrowserFileHandling(): string;

        /**
         * Gets the content types that are associated with the list.
         */
        ContentTypes(): IContentTypes;

        /**
         * Gets the content types that are associated with the list.
         * @param id - The id of the content type.
         */
        ContentTypes(id:string): IContentType;

        /** Gets or sets a value that specifies whether content types are enabled for the list. */
        ContentTypesEnabled: string;

        /** Gets a value that specifies when the list was created. */
        Created: string;

        /**
         * Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.
         */
        DataSource(): string;

        /** Gets a value that specifies the default workflow identifier for content approval on the list. Returns an empty GUID if there is no default content approval workflow. */
        DefaultContentApprovalWorkflowId: string;

        /**
         * Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL
         */
        DefaultDisplayFormUrl(): string;

        /**
         * Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
         */
        DefaultEditFormUrl(): string;

        /**
         * Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.
         */
        DefaultNewFormUrl(): string;

        /**
         * Gets the default list view.
        */
        DefaultView(): IView;

        /**
         * Gets the URL of the default view for the list.
         */
        DefaultViewUrl(): string;

        /** Gets or sets a value that specifies the description of the list. */
        Description: string;

        /** Gets or sets a value that specifies the reading order of the list. Returns ""NONE"", ""LTR"", or ""RTL"". */
        Direction: string;

        /** Gets or sets a value that specifies the server-relative URL of the document template for the list. Returns a server-relative URL if the base type is DocumentLibrary, otherwise returns null. */
        DocumentTemplateUrl: string;

        /** Gets or sets a value that specifies the minimum permission required to view minor versions and drafts within the list. Represents an SP.DraftVisibilityType value: Reader = 0; Author = 1; Approver = 2. */
        DraftVersionVisibility: string;

        /**
         * Gets a value that specifies the effective permissions on the list that are assigned to the current user.
         */
        EffectiveBasePermissions(): any;

        /**
         * Gets a value that specifies the effective permissions on the list that are for the user interface.
        */
        EffectiveBasePermissionsForUI(): any;

        /** Gets or sets a value that specifies whether list item attachments are enabled for the list. */
        EnableAttachments: string;

        /** Gets or sets a value that specifies whether new list folders can be added to the list. */
        EnableFolderCreation: string;

        /** Gets or sets a value that specifies whether minor versions are enabled for the list. */
        EnableMinorVersions: string;

        /** Gets or sets a value that specifies whether content approval is enabled for the list. */
        EnableModeration: string;

        /** Gets or sets a value that specifies whether historical versions of list items and documents can be created in the list. */
        EnableVersioning: string;

        /**  */
        EntityTypeName: string;

        /**
         * Gets the event receivers associated with the list.
        */
        EventReceivers(): IEventReceivers;

        /**
         * Gets the event receiver associated with the list.
         * @param id - The id of the event receiver.
        */
        EventReceivers(id:string): IEventReceiver;

        /**
         * Gets the fields in the list.
         */
        Fields(): IFields;

        /**
         * Gets the field in the list.
         * @param internalNameOrTitle - The internal name or title of the field.
         */
        Fields(internalNameOrTitle:string): IField;

        /**
         * Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.
         */
        FirstUniqueAncestorSecurableObject(): string;

        /** Gets or sets a value that indicates whether forced checkout is enabled for the document library. */
        ForceCheckout: string;

        /**
         * Gets the list forms in the list.
         */
        Forms(): any;

        /**
         * Gets the list form in the list.
         * @param id - The id of the form.
         */
        Forms(id:string): any;

        /** Gets a value that specifies whether the list is an external list. */
        HasExternalDataSource: string;

        /**
         * Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.
         */
        HasUniqueRoleAssignments(): any;

        /** Gets or sets a Boolean value that specifies whether the list is hidden. If true, the server sets the OnQuickLaunch property to false. */
        Hidden: string;

        /** Gets the GUID that identifies the list in the database. */
        Id: string;

        /** Gets a value that specifies the URI for the icon of the list. */
        ImageUrl: string;

        /**
         * Gets a value that specifies the information rights management settings.
        */
        InformationRightsManagementSettings(): any;

        /**  */
        IrmEnabled: string;

        /**  */
        IrmExpire: string;

        /**  */
        IrmReject: string;

        /** Gets or sets a value that specifies a flag that a client application can use to determine whether to display the list. */
        IsApplicationList: string;

        /** Gets a value that specifies whether the list is a gallery. */
        IsCatalog: string;

        /**  */
        IsPrivate: string;

        /**
         * Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.
         */
        IsSiteAssetsLibrary(): string;

        /** Gets a value that specifies the number of list items in the list. */
        ItemCount: string;

        /**
         * Gets the list items in the list.
         */
        Items(): IListItems;

        /**
         * Gets the list item in the list.
         * @param id - The id of the list item.
         */
        Items(id:number): IListItem;

        /** Gets a value that specifies the last time a list item was deleted from the list. */
        LastItemDeletedDate: string;

        /** Gets a value that specifies the last time a list item, field, or property of the list was modified. */
        LastItemModifiedDate: string;

        /**  */
        ListItemEntityTypeFullName: string;

        /** Gets or sets a value that indicates whether the list in a Meeting Workspace site contains data for multiple meeting instances within the site. */
        MultipleDataList: string;

        /** Gets or sets a value that specifies that the crawler must not crawl the list. */
        NoCrawl: string;

        /**
         * Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.
         */
        OnQuickLaunch(): string;

        /**
         * Gets a value that specifies the site that contains the list.
         */
        ParentWeb(): any;

        /** Gets a value that specifies the server-relative URL of the site that contains the list. */
        ParentWebUrl: string;

        /**
         * Gets the role assignments for the securable object.
         */
        RoleAssignments(): IRoleAssignments;

        /**
         * Gets the role assignments for the securable object.
         * @param id - The role assignment id.
         */
        RoleAssignments(id:string): IRoleAssignment;

        /**
         * Gets the root folder of the list.
         */
        RootFolder(): IFolder;

        /**
         * Gets the file in the root folder of the list.
         * @param url - The url of the file within the root folder.
         */
        RootFolder(url:string): IFile;

        /**
         * Gets a value that specifies the list schema of the list.
         */
        SchemaXml(): string;

        /** Gets a value that indicates whether folders can be created within the list. */
        ServerTemplateCanCreateFolders: string;

        /** Gets a value that specifies the feature identifier of the feature that contains the list schema for the list. Returns an empty GUID if the list schema is not contained within a feature. */
        TemplateFeatureId: string;

        /** Gets or sets the displayed title for the list. Its length must be <= 255 characters. */
        Title: string;

        /**
         * Gets the user custom actions for the list.
         */
        UserCustomActions(): IUserCustomActions;

        /**
         * Gets the user custom action(s) for the list.
         * @param id - The id of the user custom action.
         */
        UserCustomActions(id:string): IUserCustomAction;

        /**
         * Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.
         */
        ValidationFormula(): string;

        /**
         * Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.
         */
        ValidationMessage(): string;

        /**
         * Gets the views in the list.
         */
        Views(): IViews;

        /**
         * Gets the view in the list.
         * @param id - The id of the view.
         */
        Views(id:string): IView;

        /**
         * Gets a value that specifies the collection of all workflow associations for the list.
         */
        WorkflowAssociations(): string;

        /**
         * Methods
         */

        /**
         * Creates unique role assignments for the securable object.
         * @param copyRoleAssignments - True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user.
         * @param clearSubScopes - True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object.
         */
        breakRoleInheritance(copyRoleAssignments, clearSubScopes);

        /**
         * Deletes the list.
         */
        delete(): any;

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IList;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IList;

        /**
         * Returns the collection of changes from the change log that have occurred within the list, based on the specified query.
         * @param query - The change query.
         */
        getChanges(query): any;

        /**
         * Returns the list item with the specified list item identifier.
         * @param id - The list item id.
         */
        getItemById(id): IListItem;

        /**
         * Returns a collection of items from the list based on the view xml.
         * @param viewXml - The view xml CAML query.
         */
        getItems(viewXml): IListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @camlQuery - The caml query.
         */
        getItemsByQuery(camlQuery): IListItems;

        /**
         * Returns a collection of items from the list based on the specified query.
         * @query - The query that contains the change token.
         */
        getListItemChangesSinceToken(query): any;

        /**
         * Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.
         */
        getRelatedFields(): any;

        /**
         * Gets the effective user permissions for the current user.
         * @param loginName - The user login name.
         */
        getUserEffectivePermissions(loginName): any;

        /**
         * Returns the list view with the specified view identifier.
         * @param viewId - The view id.
         */
        getViewById(viewId): IView;

        /**
         * Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.
         */
        recycle(): any;

        /**
         * Renders the list data.
         * @param viewXml - A CAML query that defines the items and fields that you want returned.
         */
        renderListData(viewXml): any;

        // 
        // Types of modes: 1 - Display, 2 - Edit, 3 - New
        /**
         * Renders the list form data.
         * @param itemId - The item id.
         * @param formId - The identifier of the form.
         * @param mode - The SP.ControlMode of the control used to display the item.
         */
        renderListFormData(itemId, formId, mode:Types.ControlMode): any;

        /**
         * Reserves a list item ID for idempotent list item creation.
         */
        reserveListItemId(): any;

        /**
         * Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.
         */
        resetRoleInheritance(): any;

        /**
         * Updates it's properties.
         * @param data - The list properties to update.
         */
        update(data): any;
    }
}
