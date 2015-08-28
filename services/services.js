//var _getTreeMenuData = $.getJSON('Data/treeData.json');

/*Options:

 hideCheckbox: true, // To Check on the server side to see if there are any children available. If not available set it to true
 unselectable: true,
 active : true,
 selected : true
 lazy : true
 folder: true
 expanded : true
 key
 title*/

// Tree Menu Data
var _getTreeMenuData = [
                {title: "10.20.121.96", folder: true, key: "3",
                  children: [
                    {title: "DB - DEV", folder: true, key: "3.1",
                      children: [
                        {title: "My Schema", folder: true, key: "3.1.1",
                            children: [
                                    {title: "Tables", folder: true, key: "3.1.1.1", hideCheckbox: true },
                                    {title: "Views", folder: true, key: "3.1.1.2", hideCheckbox: true},
                                    {title: "Aliases", folder: true, key: "3.1.1.3", hideCheckbox: true },
                                    {title: "Nicknames", folder: true, key: "3.1.1.4", hideCheckbox: true },
                                    {title: "Sequences", folder: true, key: "3.1.1.5", hideCheckbox: true },
                                    {title: "Constraints", folder: true, key: "3.1.1.6", hideCheckbox: true },
                                    {title: "Indexes", folder: true, key: "3.1.1.7", hideCheckbox: true },
                                    {title: "Triggers", folder: true, key: "3.1.1.8", hideCheckbox: true },
                                    {title: "Packages", folder: true, key: "3.1.1.9", hideCheckbox: true },
                                    {title: "Stored Packages", folder: true, key: "3.1.1.10", hideCheckbox: true },
                                    {title: "User Defined Functions", folder: true, key: "3.1.1.11", hideCheckbox: true },
                                    {title: "Materialized Views", folder: true, key: "3.1.1.12", hideCheckbox: true },
                                    {title: "User Defined Distinct Datatypes", folder: true, key: "3.1.1.13", hideCheckbox: true },
                                ]
                        },
                        {title: "Schema", folder: true, key: "3.1.2",
                            children: [
                                {title: "CMS", folder: true, key: "3.1.1.1",
                                    children: [
                                        {title: "Tables", folder: true, key: "3.1.1.1",
                                            children: [
                                                {title: "C_BILLING", folder: true, key: "3.1.1.1",
                                                    children: [
                                                        {title: "Columns", folder: true, key: "3.1.1.1",
                                                            children: [
                                                                {title: "BILLING_SYSTEM_ID", key: "3.1.1.1", hideCheckbox: true},
                                                                {title: "DESCRIPTION", key: "3.1.1.2", hideCheckbox: true},
                                                                {title: "BILL_TO", key: "3.1.1.3", hideCheckbox: true },
                                                                {title: "LAST_MODIFIED_BY", key: "3.1.1.4", hideCheckbox: true },
                                                                {title: "LAST_MODIFIED_DATE", key: "3.1.1.5", hideCheckbox: true }
                                                            ]
                                                        },
                                                        {title: "Constraints", folder: true, key: "3.1.1.2", hideCheckbox: true},
                                                        {title: "Dependencies", folder: true, key: "3.1.1.3", hideCheckbox: true },
                                                        {title: "Indexes", folder: true, key: "3.1.1.4", hideCheckbox: true },
                                                        {title: "Triggers", folder: true, key: "3.1.1.5", hideCheckbox: true }
                                                    ]
                                                },
                                                {title: "C_CONTRACT_HIST", folder: true, key: "3.1.1.2", hideCheckbox: true},
                                                {title: "C_VENDOR", folder: true, key: "3.1.1.3", hideCheckbox: true },
                                                {title: "C_SUPPLIER", folder: true, key: "3.1.1.4", hideCheckbox: true },
                                                {title: "C_RATE", folder: true, key: "3.1.1.5", hideCheckbox: true },
                                                {title: "C_CLAUSE", folder: true, key: "3.1.1.6", hideCheckbox: true },
                                                {title: "C_CONTRACT", folder: true, key: "3.1.1.7", hideCheckbox: true },
                                                {title: "C_RATE_DIM", folder: true, key: "3.1.1.8", hideCheckbox: true },
                                                {title: "C_VENDOR_HIST", folder: true, key: "3.1.1.9", hideCheckbox: true },
                                                {title: "C_BILLING_HIST", folder: true, key: "3.1.1.10", hideCheckbox: true },
                                                {title: "C_CLAUSE_TEMPLATE", folder: true, key: "3.1.1.11", hideCheckbox: true },
                                                {title: "METADIRECTORY_FEED", folder: true, key: "3.1.1.12", hideCheckbox: true },
                                                {title: "METADIRECTORY_NEW", folder: true, key: "3.1.1.13", hideCheckbox: true },
                                            ]
                                        },
                                        {title: "Views", folder: true, key: "3.1.1.2", hideCheckbox: true},
                                        {title: "Aliases", folder: true, key: "3.1.1.3", hideCheckbox: true },
                                        {title: "Nicknames", folder: true, key: "3.1.1.4", hideCheckbox: true },
                                        {title: "Sequences", folder: true, key: "3.1.1.5", hideCheckbox: true },
                                        {title: "Constraints", folder: true, key: "3.1.1.6", hideCheckbox: true },
                                        {title: "Indexes", folder: true, key: "3.1.1.7", hideCheckbox: true },
                                        {title: "Triggers", folder: true, key: "3.1.1.8", hideCheckbox: true },
                                        {title: "Packages", folder: true, key: "3.1.1.9", hideCheckbox: true },
                                        {title: "Stored Packages", folder: true, key: "3.1.1.10", hideCheckbox: true },
                                        {title: "User Defined Functions", folder: true, key: "3.1.1.11", hideCheckbox: true },
                                        {title: "Materialized Views", folder: true, key: "3.1.1.12", hideCheckbox: true },
                                        {title: "User Defined Distinct Datatypes", folder: true, key: "3.1.1.13", hideCheckbox: true },
                                    ]
                                },
                                {title: "MONGO", folder: true, key: "3.1.1.2", hideCheckbox: true},
                                {title: "COUCH", folder: true, key: "3.1.1.3", hideCheckbox: true },
                                {title: "CASSANDRA", folder: true, key: "3.1.1.4", hideCheckbox: true },
                                {title: "Splice", folder: true, key: "3.1.1.5", hideCheckbox: true },
                                {title: "Monet", folder: true, key: "3.1.1.6", hideCheckbox: true },
                                {title: "IBatis", folder: true, key: "3.1.1.7", hideCheckbox: true },
                                {title: "HPCC", folder: true, key: "3.1.1.8", hideCheckbox: true },
                                {title: "Accumulo", folder: true, key: "3.1.1.9", hideCheckbox: true },
                                {title: "RMS", folder: true, key: "3.1.1.10", hideCheckbox: true },
                                {title: "Raptor", folder: true, key: "3.1.1.11", hideCheckbox: true },
                                {title: "Ne", folder: true, key: "3.1.1.12", hideCheckbox: true },
                                {title: "ArangB", folder: true, key: "3.1.1.13", hideCheckbox: true },
                            ]
                        },
                        {title: "Storage", folder: true, key: "3.1.3",
                          children :[
                                {title: "Buffer Pools", key: "3.1.5.1.1", folder: true,
                                    children :[
                                        {title: "BP_4K", key: "3.1.5.1.1", hideCheckbox: true},
                                        {title: "BP_8K", key: "3.1.5.1.2",hideCheckbox: true},
                                        {title: "DEFAULTTBP", key: "3.1.5.1.3", hideCheckbox: true}
                                    ]
                                }
                            ]
                        },
                        {title: "Management", folder: true, key: "3.1.4",
                            children :[
                                {title: "Current Activity", key: "3.1.5.1.1", folder: true,
                                    children :[
                                        {title: "Connection Info", key: "3.1.5.1.1", folder: true,
                                            children :[
                                                {title: "100 - (Info)", key: "3.1.5.1.1", hideCheckbox: true},
                                                {title: "localhost", key: "3.1.5.1.2", hideCheckbox: true},
                                                {title: "10.34.92.100", key: "3.1.5.1.3", hideCheckbox: true}
                                            ]
                                        },
                                        {title: "Locks / Object", key: "3.1.5.1.2",folder: true,
                                            children :[
                                                {title: "SYSTEM", key: "3.1.5.1.1", hideCheckbox: true},
                                                {title: "UTIL_ACTIVITY", key: "3.1.5.1.2", hideCheckbox: true}
                                            ]
                                        },
                                        {title: "Locks / Process ID", key: "3.1.5.1.3", hideCheckbox: true,folder: true}
                                    ]
                                }
                            ]
                        },
                        {title: "Security", folder: true, key: "3.1.5",
                            children :[
                                {title: "Groups", folder: true, key: "3.1.5.1",
                                    children :[
                                        {title: "User 1", key: "3.1.5.1.1", hideCheckbox: true},
                                        {title: "User 2", key: "3.1.5.1.2", hideCheckbox: true},
                                        {title: "User 3", key: "3.1.5.1.3", hideCheckbox: true}
                                    ]
                                },
                                {title: "Roles", folder: true, key: "3.1.5.2",
                                    children :[
                                        {title: "SYSROLE_AUTH_DBADM", key: "3.1.5.2.1",
                                            children: [
                                                {title: "Group Members", folder: true, key: "3.1.3",
                                                    children :[
                                                        {title: "DBA_FULLACCESS", key: "3.1.5.1.1", hideCheckbox: true},
                                                        {title: "DBADM", key: "3.1.5.1.2", hideCheckbox: true}
                                                    ]
                                                },
                                                {title: "Role Members", folder: true, key: "3.1.3", hideCheckbox: true},
                                                {title: "User Members", folder: true, key: "3.1.3",
                                                    children :[
                                                        {title: "SQLDM", key: "3.1.5.1.1", hideCheckbox: true},
                                                        {title: "CLUSTERDM_ACCESS", key: "3.1.5.1.2", hideCheckbox: true}
                                                    ]}
                                            ]
                                        }
                                    ] },
                                {title: "Users", folder: true, key: "3.1.1.1", hideCheckbox: true },
                            ]
                        }
                      ]
                    }
                  ]
                },
                {title: "10.20.121.95", folder: true, key: "4",
                  children: [
                    {title: "DB - QA", folder: true, key: "4.1",
                      children: [
                        {title: "My Schema", folder: true, key: "4.1.1" ,
                            children: [
                                {title: "Tables", folder: true, key: "4.1.1.1", hideCheckbox: true },
                                {title: "Views", folder: true, key: "4.1.1.2", hideCheckbox: true},
                                {title: "Aliases", folder: true, key: "4.1.1.3", hideCheckbox: true },
                                {title: "Nicknames", folder: true, key: "4.1.1.4", hideCheckbox: true },
                                {title: "Sequences", folder: true, key: "4.1.1.5", hideCheckbox: true },
                                {title: "Constraints", folder: true, key: "4.1.1.6", hideCheckbox: true },
                                {title: "Indexes", folder: true, key: "4.1.1.7", hideCheckbox: true },
                                {title: "Triggers", folder: true, key: "4.1.1.8", hideCheckbox: true },
                                {title: "Packages", folder: true, key: "4.1.1.9", hideCheckbox: true },
                                {title: "Stored Packages", folder: true, key: "4.1.1.10", hideCheckbox: true },
                                {title: "User Defined Functions", folder: true, key: "4.1.1.11", hideCheckbox: true },
                                {title: "Materialized Views", folder: true, key: "4.1.1.12", hideCheckbox: true },
                                {title: "User Defined Distinct Datatypes", folder: true, key: "4.1.1.13", hideCheckbox: true },
                            ]
                        },
                        {title: "Schema", folder: true, key: "4.1.2" },
                        {title: "Storage", folder: true, key: "4.1.3" },
                        {title: "Management", folder: true, key: "4.1.4" },
                        {title: "Security", folder: true, key: "4.1.5" }
                      ]
                    }
                  ]
                },
                {title: "10.20.121.97", folder: true, key: "5",
                  children: [
                    {title: "DB - UAT", folder: true, key: "5.1",
                      children: [
                        {title: "My Schema", folder: true, key: "5.1.1" ,
                            children: [
                                {title: "Tables", folder: true, key: "5.1.1.1", hideCheckbox: true },
                                {title: "Views", folder: true, key: "5.1.1.2", hideCheckbox: true},
                                {title: "Aliases", folder: true, key: "5.1.1.3", hideCheckbox: true },
                                {title: "Nicknames", folder: true, key: "5.1.1.4", hideCheckbox: true },
                                {title: "Sequences", folder: true, key: "5.1.1.5", hideCheckbox: true },
                                {title: "Constraints", folder: true, key: "5.1.1.6", hideCheckbox: true },
                                {title: "Indexes", folder: true, key: "5.1.1.7", hideCheckbox: true },
                                {title: "Triggers", folder: true, key: "5.1.1.8", hideCheckbox: true },
                                {title: "Packages", folder: true, key: "5.1.1.9", hideCheckbox: true },
                                {title: "Stored Packages", folder: true, key: "5.1.1.10", hideCheckbox: true },
                                {title: "User Defined Functions", folder: true, key: "5.1.1.11", hideCheckbox: true },
                                {title: "Materialized Views", folder: true, key: "5.1.1.12", hideCheckbox: true },
                                {title: "User Defined Distinct Datatypes", folder: true, key: "5.1.1.13", hideCheckbox: true },
                            ]
                        },
                        {title: "Schema", folder: true, key: "5.1.2" },
                        {title: "Storage", folder: true, key: "5.1.3" },
                        {title: "Management", folder: true, key: "5.1.4" },
                        {title: "Security", folder: true, key: "5.1.5" }
                      ]
                    }
                  ]
                },
                {title: "10.20.121.98", folder: true, key: "6",
                  children: [
                    {title: "DB - PROD", folder: true, key: "6.1",
                      children: [
                        {title: "My Schema", folder: true, key: "6.1.1" ,
                            children: [
                                {title: "Tables", folder: true, key: "6.1.1.1", hideCheckbox: true },
                                {title: "Views", folder: true, key: "6.1.1.2", hideCheckbox: true},
                                {title: "Aliases", folder: true, key: "6.1.1.3", hideCheckbox: true },
                                {title: "Nicknames", folder: true, key: "6.1.1.4", hideCheckbox: true },
                                {title: "Sequences", folder: true, key: "6.1.1.5", hideCheckbox: true },
                                {title: "Constraints", folder: true, key: "6.1.1.6", hideCheckbox: true },
                                {title: "Indexes", folder: true, key: "6.1.1.7", hideCheckbox: true },
                                {title: "Triggers", folder: true, key: "6.1.1.8", hideCheckbox: true },
                                {title: "Packages", folder: true, key: "6.1.1.9", hideCheckbox: true },
                                {title: "Stored Packages", folder: true, key: "6.1.1.10", hideCheckbox: true },
                                {title: "User Defined Functions", folder: true, key: "6.1.1.11", hideCheckbox: true },
                                {title: "Materialized Views", folder: true, key: "6.1.1.12", hideCheckbox: true },
                                {title: "User Defined Distinct Datatypes", folder: true, key: "6.1.1.13", hideCheckbox: true },
                            ]
                        },
                        {title: "Schema", folder: true, key: "6.1.2" },
                        {title: "Storage", folder: true, key: "6.1.3" },
                        {title: "Management", folder: true, key: "6.1.4" },
                        {title: "Security", folder: true, key: "6.1.5" }
                      ]
                    }
                  ]
                }
            ];