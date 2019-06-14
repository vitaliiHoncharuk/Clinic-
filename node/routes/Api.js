const apiRouter = require("express").Router();
const userRouter = require("./userRouter");
const doctorRouter = require("./doctorRouter");
const clinicSectionRouter = require("./clinicSectionsRouter");
const authRouter = require("./authRouter");
const commentRouter = require("./commentRouter");
const starRouter = require("./starRouter");


apiRouter.use("/user", userRouter);
apiRouter.use("/auth",authRouter);
apiRouter.use("/doctor", doctorRouter);
apiRouter.use('/section', clinicSectionRouter);
apiRouter.use('/comment', commentRouter);
apiRouter.use('/rate', starRouter);



module.exports = apiRouter;
