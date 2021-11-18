import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch()
export class ContextFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const [req, res, next] = host.getArgs();

    // console.log("======================================")
    // console.log("res")
    // console.dir(res)
    // console.log("res")
    // console.dir(res)
    // console.log("next")
    // console.dir(next)
  }
}
