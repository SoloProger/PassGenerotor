<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit57736e774ca97dee09b7eb6f4447e0b6
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Andreisolo\\Server\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Andreisolo\\Server\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit57736e774ca97dee09b7eb6f4447e0b6::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit57736e774ca97dee09b7eb6f4447e0b6::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit57736e774ca97dee09b7eb6f4447e0b6::$classMap;

        }, null, ClassLoader::class);
    }
}
