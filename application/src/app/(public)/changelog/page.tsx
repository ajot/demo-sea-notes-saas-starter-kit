import { Box, Card, CardContent, Chip, Typography } from '@mui/material';

interface ChangelogEntry {
  version: string;
  date: string;
  features?: string[];
  improvements?: string[];
  bugFixes?: string[];
}

const changelog: ChangelogEntry[] = [
  {
    version: '2.0.0',
    date: 'January 15, 2025',
    features: [
      'AI-powered content generation for notes',
      'Enhanced dashboard with real-time updates',
      'Multi-theme support with custom color schemes',
    ],
    improvements: [
      'Improved performance with Next.js 15 Turbopack',
      'Better mobile responsiveness across all pages',
      'Streamlined user onboarding process',
    ],
  },
  {
    version: '1.5.0',
    date: 'December 20, 2024',
    features: [
      'Magic link authentication for passwordless login',
      'Export notes in multiple formats',
      'Admin dashboard for user management',
    ],
    improvements: [
      'Faster page load times',
      'Enhanced email templates',
      'Better error handling and user feedback',
    ],
    bugFixes: [
      'Fixed subscription renewal issues',
      'Resolved email verification edge cases',
      'Corrected timezone display in note timestamps',
    ],
  },
  {
    version: '1.0.0',
    date: 'November 1, 2024',
    features: [
      'Initial release of SeaNotes',
      'User authentication with email/password',
      'Note creation, editing, and deletion',
      'Subscription management with Stripe',
      'Profile management and settings',
    ],
  },
];

/**
 * Changelog page component that displays version history and updates
 */
export default function ChangelogPage() {
  return (
    <Box
      sx={{
        maxWidth: 800,
        mx: 'auto',
        px: 2,
        py: 6,
      }}
    >
      <Typography variant="h1" gutterBottom align="center" sx={{ mb: 1 }}>
        Changelog
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" sx={{ mb: 6 }}>
        Stay up to date with the latest features and improvements
      </Typography>

      {changelog.map((entry) => (
        <Card key={entry.version} elevation={2} sx={{ mb: 4 }}>
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Chip 
                label={`v${entry.version}`} 
                color="primary" 
                size="small" 
                sx={{ mr: 2 }}
              />
              <Typography variant="body2" color="text.secondary">
                {entry.date}
              </Typography>
            </Box>

            {entry.features && entry.features.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mt: 2, mb: 1, fontWeight: 600 }}>
                  ✨ New Features
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3 }}>
                  {entry.features.map((feature, i) => (
                    <Typography component="li" key={i} variant="body1" sx={{ mb: 0.5 }}>
                      {feature}
                    </Typography>
                  ))}
                </Box>
              </>
            )}

            {entry.improvements && entry.improvements.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
                  🚀 Improvements
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3 }}>
                  {entry.improvements.map((improvement, i) => (
                    <Typography component="li" key={i} variant="body1" sx={{ mb: 0.5 }}>
                      {improvement}
                    </Typography>
                  ))}
                </Box>
              </>
            )}

            {entry.bugFixes && entry.bugFixes.length > 0 && (
              <>
                <Typography variant="h6" sx={{ mt: 3, mb: 1, fontWeight: 600 }}>
                  🐛 Bug Fixes
                </Typography>
                <Box component="ul" sx={{ m: 0, pl: 3 }}>
                  {entry.bugFixes.map((fix, i) => (
                    <Typography component="li" key={i} variant="body1" sx={{ mb: 0.5 }}>
                      {fix}
                    </Typography>
                  ))}
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      ))}

      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          For more information about each release, visit our documentation or contact support.
        </Typography>
      </Box>
    </Box>
  );
}