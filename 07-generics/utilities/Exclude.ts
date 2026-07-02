// Exclude<T, U>

// Idi previous utility types laga object properties meeda work cheyyadu.

// Idi Union Types meeda work chestundi.


type Role = 'admin' | 'manager' | 'user' | 'guest';

type AllowedRoles = Exclude<Role,'guest'> // T lo nunchi ee value ni remove chese kotha type ni create cheyadam , andlo excluded value undadu

// T lo unna values nunchi U values remove cheyyi.
