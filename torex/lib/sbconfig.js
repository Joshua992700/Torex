import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vncxfxtpjdygcnnpklis.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZuY3hmeHRwamR5Z2NubnBrbGlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjYwNzEwNTUsImV4cCI6MjA0MTY0NzA1NX0.5bfTcyRDoN1pTpU_VQ9gl4A71JDwxISlIZ9NkmlGv8U'

const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase