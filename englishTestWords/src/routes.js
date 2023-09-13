import { CONFIGURE_ROUTE, TEST_WORDS_ROUTE, TEST_TRANSLATES_ROUTE } from "./utils/consts";

import TestTranslatesPage from "./pages/TestTranslates/TestTranslatesPage";
import TestWordsPage from "./pages/TestWords/TestWordsPage";
import ConfigurePage from "./pages/Configure/ConfigurePage";

export const router = [
    {
        path: CONFIGURE_ROUTE,
        Component: ConfigurePage
    },
    {
        path: TEST_WORDS_ROUTE,
        Component: TestWordsPage
    },
    {
        path: TEST_TRANSLATES_ROUTE,
        Component: TestTranslatesPage
    }
];