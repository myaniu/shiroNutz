var ioc = {
		
	sessionManager : {
		type : "org.apache.shiro.web.session.mgt.DefaultWebSessionManager",
		fields : {
			globalSessionTimeout : 3600000
		}
	},

	sha256CredentialsMatcher : {
		type : "org.apache.shiro.authc.credential.Sha256CredentialsMatcher",
		fields : {
			storedCredentialsHexEncoded : false,
			hashIterations : 1024,
			hashSalted : true
		}
	},

	shiroDbRealm : {
		type : "com.dolplay.nutzshiro.shiro.ShiroDbRealm",
		fields : {
			credentialsMatcher : {
				refer : "sha256CredentialsMatcher"
			},
			userService : {
				refer : "userService"
			},
			roleService : {
				refer : "roleService"
			}
		}
	},

	securityManager : {
		type : "org.apache.shiro.web.mgt.DefaultWebSecurityManager",
		fields : {
			sessionManager : {
				refer : "sessionManager"
			},
			realm : {
				refer : "shiroDbRealm"
			}
		}
	}
};