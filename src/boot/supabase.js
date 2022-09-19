import { createClient } from '@supabase/supabase-js'
import useAuthUser from 'src/composables/UseAuthUser'

const supabaseUrl = 'https://elxsxcqpebldypyxfolk.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVseHN4Y3FwZWJsZHlweXhmb2xrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTgzMzc5NzgsImV4cCI6MTk3MzkxMzk3OH0.27fCL1nhJ_7Nk8QhkcHeRWXl0mBvfeb8JbGVaVhZzK4'
const supabase = createClient(supabaseUrl, supabaseKey)

console.log('init supabase:', supabase)

supabase.auth.onAuthStateChange((event, session) => {
  const { user } = useAuthUser()

  user.value = session?.user || null
})

export default function useSupabase () {
  return { supabase }
}
