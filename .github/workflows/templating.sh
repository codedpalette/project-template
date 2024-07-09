#!/usr/bin/env sh
echo "Replacing $TEMPLATE with $SUBSTITUTION"
find . -type f -not -path './\.*' -exec sed -i "s/$TEMPLATE/$SUBSTITUTION/g" {} +
rm -f .github/workflows/init.yml