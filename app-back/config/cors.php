<?php

return [
    'paths' => ['api/*', 'sanctum/csrf-cookie'],
    'allowed_methods' => ['*'], // Allow all HTTP methods
    'allowed_origins' => ['*'], // Allow all origins
    'allowed_origins_patterns' => [], // Patterns for allowed origins
    'allowed_headers' => ['*'], // Allow all headers
    'exposed_headers' => [], // No headers are exposed
    'max_age' => 0, // No caching
    'supports_credentials' => true, // Cookies and HTTP authentication are allowed
];
