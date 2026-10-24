import assert from 'node:assert/strict';
import { listProfiles, getProfile, generalProfile } from '@x12i/memorix-scoper-profiles';
const profiles = listProfiles();
const selected = getProfile(generalProfile.id);
assert.equal(selected.id, generalProfile.id);
assert(profiles.some(profile => profile.id === selected.id));
assert(selected.allowedCapabilities.length > 0);
assert(selected.epistemicRules.length > 0);
console.log({ id: selected.id, capabilities: selected.allowedCapabilities, rules: selected.epistemicRules, budgets: selected.defaultBudgets });
