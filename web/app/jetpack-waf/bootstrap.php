<?php
define( 'DISABLE_JETPACK_WAF', false );
if ( defined( 'DISABLE_JETPACK_WAF' ) && DISABLE_JETPACK_WAF ) return;
define( 'JETPACK_WAF_MODE', 'silent' );
define( 'JETPACK_WAF_SHARE_DATA', false );
define( 'JETPACK_WAF_SHARE_DEBUG_DATA', false );
define( 'JETPACK_WAF_DIR', '/srv/users/serverpilot/apps/devbostore/web/app/jetpack-waf' );
define( 'JETPACK_WAF_WPCONFIG', '/srv/users/serverpilot/apps/devbostore/web/app/../wp-config.php' );
define( 'JETPACK_WAF_ENTRYPOINT', 'rules/rules.php' );
require_once '/srv/users/serverpilot/apps/devbostore/web/app/plugins/jetpack/vendor/autoload.php';
Automattic\Jetpack\Waf\Waf_Runner::initialize();
