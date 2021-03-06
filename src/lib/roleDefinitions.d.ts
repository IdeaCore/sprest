declare module $REST.Types {
    /**
     * Role Definitions
     */
    interface IRoleDefinitions extends IBase {
        /**
         * Properties
         */

        /** The role definition collection */
        results: Array<IRoleDefinition>;

        /**
         * Methods
         */

        /**
         * Method to execute the request.
         * @param callback - (Optional) The method to be executed after the request completes.
         */
        execute(callback?:(...args) => void): IRoleDefinitions;

        /**
         * Method to execute the request.
         * @param syncFl - Flag to execute the request synchronously
         */
        execute(syncFl:boolean): IRoleDefinitions;

        /**
         * Gets the role definition with the specified ID from the collection.
         * @param roleDefId - The ID of the role definition that defines the permissions to assign.
         */
        getById(roleDefId): IRoleDefinition;

        /**
         * Gets the role definition with the specified name.
         * @param name -
         */
        getByName(name): IRoleDefinition;

        /**
         * Gets the role definition with the specified role type.
         * @param roleType - The RoleTypeKind of the role definition.
         */
        getByType(roleType:Types.RoleType): IRoleDefinition;

        /**
         * Queries the collection.
         * @param oData - The OData information.
         */
        query(oData:Settings.ODataSettings): IRoleDefinitions;
    }
}
