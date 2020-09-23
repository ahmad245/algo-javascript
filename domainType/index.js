// GoDaddy makes a lot of different top-level domains available to its customers.
// A top-level domain is one that goes directly after the last dot ('.') in the domain name, for example .com in example.com. 
//To help the users choose from available domains, GoDaddy is introducing a new feature that shows the type of the chosen top-level domain.
//You have to implement this feature. To begin with,
// you want to write a function that labels the domains as "commercial", "organization", "network" or "information" for .com, .org, .net or .info respectively. 
//For the given list of domains return the list of their labels.

// Example

// For domains = ["en.wiki.org", "codefights.com", "happy.net", "code.info"], 
//the output should be domainType(domains) = ["organization", "commercial", "network", "information"].
// Hints

// split()
// push()

function domainTypes(domains) {
    const domainType = [];

    for (let i = 0; i < domains.length; i++) {
        const domain = domains[i].split('.');
        const lastDomain = domain[domain.length - 1];

        switch (lastDomain) {
            case 'org':
                domainType.push("organization");
                break;
            case 'info':
                domainType.push("informational");
                break;
            case 'net':
                domainType.push("network");
                break;
            case 'com':
                domainType.push("commercial");
                break;

            default:
                break;
        }

    }
    return domainType;
}

console.log(domainTypes(["hackernoon.com", "mailchimp.net", "codewars.org", "symfony.info"]));