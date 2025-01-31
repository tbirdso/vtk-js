import { mat2, mat3, vec2, vec3, vec4 } from "gl-matrix";
import { Bounds, Extent, RGBAColor, RGBColor } from "../../../types";

/**
 *
 * @param {Number} size The size of the array.
 */
export function createArray(size?: number): number[];

/**
 * Get the number π.
 */
export function Pi(): number;

/**
 * Convert degrees to radians.
 * @param {Number} deg The value in degrees.
 */
export function radiansFromDegrees(deg: number): number;

/**
 * Convert radians to degrees.
 * @param {Number} rad The value in radians.
 */
export function degreesFromRadians(rad: number): number;

/**
 * Same as Math.round().
 * @param {Number} param1 The value to be rounded to the nearest integer.
 */
export function round(param1: number): number;

/**
 * Same as Math.floor().
 * @param {Number} param1 A numeric expression.
 */
export function floor(param1: number): number;

/**
 * Same as Math.ceil().
 * @param {Number} param1 A numeric expression.
 */
export function ceil(param1: number): number;

/**
 * Get the minimum of the two arguments provided. If either argument is NaN,
 * the first argument will always be returned.
 * @param {Number} param1 The first numeric expression.
 * @param {Number} param2 The second numeric expression.
 */
export function min(param1: number, param2: number): number;

/**
 * Get the maximum of the two arguments provided. If either argument is NaN,
 * the first argument will always be returned.
 * @param {Number} param1 The first numeric expression.
 * @param {Number} param2 The second numeric expression.
 */
export function max(param1: number, param2: number): number;

/**
 * Get the minimum of the array.
 * @param {Number[]} arr The array.
 * @param {Number} offset The offset.
 * @param {Number} stride The stride.
 */
export function arrayMin(arr: number[], offset: number, stride: number): number;

/**
 * Get the maximum of the array.
 * @param {Number[]} arr The array.
 * @param {Number} offset The offset.
 * @param {Number} stride The stride.
 */
export function arrayMax(arr: number[], offset: number, stride: number): number;

/**
 *
 * @param {Number[]} arr The array.
 * @param {Number} offset The offset.
 * @param {Number} stride The stride.
 */
export function arrayRange(arr: number[], offset: number, stride: number): number[];

/**
 * Gives the exponent of the lowest power of two not less than x.
 *
 */
export function ceilLog2(): void;

/**
 * Compute N factorial, N! = N*(N-1) * (N-2)...*3*2*1.
 */
export function factorial(): void;

/**
 * Generate pseudo-random numbers distributed according to the standard normal
 * distribution.
 */
export function gaussian(): void;

/**
 * Compute the nearest power of two that is not less than x.
 * @param {Number} xi A numeric expression.
 */
export function nearestPowerOfTwo(xi: number): number;

/**
 * Returns true if integer is a power of two.
 * @param {Number} x A numeric expression.
 */
export function isPowerOfTwo(x: number): boolean;

/**
 * The number of combinations of n objects from a pool of m objects (m>n).
 * @param {Number} m The first numeric expression.
 * @param {Number} n The second numeric expression.
 */
export function binomial(m: number, n: number): number;

/**
 * Start iterating over "m choose n" objects.
 * @param {Number} [m] The first numeric expression.
 * @param {Number} [n] The second numeric expression.
 */
export function beginCombination(m?: number, n?: number): number;

/**
 * Given m, n, and a valid combination of n integers in the range [0,m[, this
 * function alters the integers into the next combination in a sequence of all
 * combinations of n items from a pool of m.
 * @param {Number} m The first numeric expression.
 * @param {Number} n The second numeric expression.
 * @param {Number[]} r
 */
export function nextCombination(m: number, n: number, r: number[]): number;

/**
 * Initialize seed value.
 * @param {Number} seed
 */
export function randomSeed(seed: number): void;

/**
 * Return the current seed used by the random number generator.
 */
export function getSeed(): number;

/**
 * Generate pseudo-random numbers distributed according to the uniform
 * distribution between min and max.
 * @param {Number} minValue
 * @param {Number} maxValue
 */
export function random(minValue: number, maxValue: number): number;

/**
 * Addition of two 3-vectors.
 * @param {vec3} a The first 3D vector.
 * @param {vec3} b The second 3D vector.
 * @param {vec3} out The output 3D vector.
 * @example
 * ```js
 * a[3] + b[3] => out[3]
 * ```
 */
export function add(a: vec3, b: vec3, out: vec3): vec3;

/**
 * Subtraction of two 3-vectors.
 * @param {vec3} a The first 3D vector.
 * @param {vec3} b The second 3D vector.
 * @param {vec3} out The output 3D vector.
 * @example
 * ```js
 * a[3] - b[3] => out[3]
 * ```
 */
export function subtract(a: vec3, b: vec3, out: vec3): vec3;

/**
 *
 * @param {vec3} vec 
 * @param {Number} scalar 
 * @example
 * ```js
 * vec[3] * scalar => vec[3]
 * ```
 */
export function multiplyScalar(vec: vec3, scalar: number): vec3;

/**
 *
 * @param {vec2} vec 
 * @param {Number} scalar 
 * @example
 * ```js
 * vec[3] * scalar => vec[3]
 * ```
 */
export function multiplyScalar2D(vec: vec2, scalar: number): vec2;

/**
 *
 * @param {vec3} a
 * @param {vec3} b 
 * @param {Number} scalar
 * @param {vec3} out
 * @example
 * ```js
 * a[3] +  b[3] * scalar => out[3]
 * ```
 */
export function multiplyAccumulate(a: vec3, b: vec3, scalar: number, out: vec3): vec3;

/**
 *
 * @param {vec2} a
 * @param {vec2} b
 * @param {Number} scalar 
 * @param {vec2} out
 * @example
 * ```js
 * a[2] + b[2] * scalar => out[2]
 * ```
 */
export function multiplyAccumulate2D(a: vec2, b: vec2, scalar: number, out: vec2): vec2;

/**
 *
 * @param {vec3} x
 * @param {vec3} y
 * @example
 * ```js
 * a[2] + b[2] * scalar => out[2]
 * ```
 */
export function dot(x: vec3, y: vec3): number;

/**
 * Outer product of two 3-vectors.
 * @param {vec3} x The first 3D vector.
 * @param {vec3} y The second 3D vector.
 * @param {mat3} out_3x3 The output 3x3 matrix.
 */
export function outer(x: vec3, y: vec3, out_3x3: mat3): void;

/**
 * Computes cross product of 3D vectors x and y.
 * @param {vec3} x The first 3D vector.
 * @param {vec3} y The second 3D vector.
 * @param {vec3} out The output 3D vector.
 */
export function cross(x: vec3, y: vec3, out: vec3): vec3;

/**
 *
 * @param {Number[]} x 
 * @param {Number} n 
 */
export function norm(x: number[], n: number): number;

/**
 * Normalize in place. Returns norm.
 * @param {vec3} x The vector to normlize.
 */
export function normalize(x: vec3): number;

/**
 * Given a unit vector v1, find two unit vectors v2 and v3 such that v1 cross v2 = v3
 * @param {vec3} x The first vector.
 * @param {vec3} y The second vector.
 * @param {vec3} z The third vector.
 * @param {Number} theta
 */
export function perpendiculars(x: vec3, y: vec3, z: vec3, theta: number): void;

/**
 *
 * @param {vec3} a
 * @param {vec3} b
 * @param {vec3} projection
 */
export function projectVector(a: vec3, b: vec3, projection: vec3): boolean;

/**
 *
 * @param {vec2} x
 * @param {vec2} y
 */
export function dot2D(x: vec2, y: vec2): number;

/**
 * Compute the projection of 2D vector `a` on 2D vector `b` and returns the
 * result in projection vector.
 * @param {vec2} a The first 2D vector.
 * @param {vec2} b The second 2D vector.
 * @param {vec2} projection The projection 2D vector.
 */
export function projectVector2D(a: vec2, b: vec2, projection: vec2): boolean;

/**
 * Compute distance squared between two points p1 and p2.
 * @param {vec3} x The first 3D vector.
 * @param {vec3} y The second 3D vector.
 */
export function distance2BetweenPoints(x: vec3, y: vec3): number;

/**
 * Angle between 3D vectors.
 * @param {vec3} v1 The first 3D vector.
 * @param {vec3} v2 The second 3D vector.
 */
export function angleBetweenVectors(v1: vec3, v2: vec3): number;


/**
 * Signed angle between v1 and v2 with regards to plane defined by normal vN.
 * angle between v1 and v2 with regards to plane defined by normal vN.Signed
 * angle between v1 and v2 with regards to plane defined by normal
 * vN.t3(mat_3x3, in_3, out_3)
 * @param {vec3} v1 The first 3D vector.
 * @param {vec3} v2 The second 3D vector.
 * @param {vec3} vN 
 */
export function signedAngleBetweenVectors(v1: vec3, v2: vec3, vN: vec3): number;


/**
 * Compute the amplitude of a Gaussian function with mean=0 and specified variance.
 * @param {Number} mean The mean value.
 * @param {Number} variance The variance value.
 * @param {Number} position The position value.
 */
export function gaussianAmplitude(mean: number, variance: number, position: number): number;

/**
 * Compute the amplitude of an unnormalized Gaussian function with mean=0 and
 * specified variance.
 * @param {Number} mean The mean value.
 * @param {Number} variance The variance value.
 * @param {Number} position The position value.
 */
export function gaussianWeight(mean: number, variance: number, position: number): number;

/**
 * Outer product of two 2-vectors.
 * @param {vec2} x The first 2D vector.
 * @param {vec2} y The second 2D vector.
 * @param {mat2} out_2x2 The output 2x2 matrix.
 */
export function outer2D(x: vec2, y: vec2, out_2x2: mat2): void;

/**
 * Compute the norm of a 2-vector.
 * @param {vec2} x2D x The 2D vector.
 */
export function norm2D(x2D: vec2): number;

/**
 * Normalize (in place) a 2-vector.
 * @param {vec2} x The 2D vector.
 */
export function normalize2D(x: vec2): number;

/**
 *
 * @param {Number[]} args 
 */
export function determinant2x2(args: number[]): number;

/**
 * LU Factorization of a 3x3 matrix.
 * @param {mat3} mat_3x3 
 * @param {vec3} index_3 
 */
export function LUFactor3x3(mat_3x3: mat3, index_3: vec3): void;

/**
 * LU back substitution for a 3x3 matrix.
 * @param {mat3} mat_3x3 
 * @param {vec3} index_3 
 * @param {vec3} x_3 
 */
export function LUSolve3x3(mat_3x3: mat3, index_3: vec3, x_3: vec3): void;

/**
 * Solve mat_3x3y_3 = x_3 for y and place the result in y.
 * @param {mat3} mat_3x3 
 * @param {vec3} x_3 
 * @param {vec3} y_3 
 */
export function linearSolve3x3(mat_3x3: mat3, x_3: vec3, y_3: vec3): void;

/**
 *
 * @param {mat3} mat_3x3 
 * @param {vec3} in_3 
 * @param {vec3} out_3 
 */
export function multiply3x3_vect3(mat_3x3: mat3, in_3: vec3, out_3: vec3): void;

/**
 *
 * @param {mat3} a_3x3 
 * @param {mat3} b_3x3 
 * @param {mat3} out_3x3 
 */
export function multiply3x3_mat3(a_3x3: mat3, b_3x3: mat3, out_3x3: mat3): void;

/**
 *
 * @param {Number[]} a 
 * @param {Number[]} b 
 * @param {Number} rowA 
 * @param {Number} colA 
 * @param {Number} rowB 
 * @param {Number} colB 
 * @param {Number[]} out_rowXcol 
 */
export function multiplyMatrix(a: number[], b: number[], rowA: number, colA: number, rowB: number, colB: number, out_rowXcol: number[]): void;

/**
 * Transpose a 3x3 matrix.
 * @param {mat3} in_3x3 The input 3x3 matrix.
 * @param {mat3} outT_3x3 The output 3x3 matrix.
 */
export function transpose3x3(in_3x3: mat3, outT_3x3: mat3): void;

/**
 * Invert a 3x3 matrix.
 * @param {mat3} in_3x3 The input 3x3 matrix.
 * @param {mat3} outI_3x3 The output 3x3 matrix.
 */
export function invert3x3(in_3x3: mat3, outI_3x3: mat3): void;

/**
 * Set mat_3x3 to the identity matrix.
 * @param {mat3} mat_3x3 The input 3x3 matrix.
 */
export function identity3x3(mat_3x3: mat3): void;

/**
 * Calculate the determinant of a 3x3 matrix.
 * @param {mat3} mat_3x3 The input 3x3 matrix.
 */
export function determinant3x3(mat_3x3: mat3): number;

/**
 *
 * @param {vec4} quat_4
 * @param {mat3} mat_3x3 
 */
export function quaternionToMatrix3x3(quat_4: vec4, mat_3x3: mat3): void;

/**
 *
 * @param {Number[]} a 
 * @param {Number[]} b 
 * @param {Number} eps 
 */
export function areEquals(a: number[], b: number[], eps: number): boolean;

/**
 *
 * @param {Number} num 
 * @param {Number} [digits] 
 */
export function roundNumber(num: number, digits?: number): number;

/**
 *
 * @param {vec3} vector 
 * @param {vec3} [out]  
 * @param {Number} [digits] 
 */
export function roundVector(vector: vec3, out?: vec3, digits?: number): vec3;

/**
 *
 * @param {Number[]} a 
 * @param {Number} n 
 * @param {Number[]} w 
 * @param {Number[]} v 
 */
export function jacobiN(a: number[], n: number, w: number[], v: number[]): number;

/**
 *
 * @param {mat3} mat_3x3 
 * @param {vec4} quat_4 
 */
export function matrix3x3ToQuaternion(mat_3x3: mat3, quat_4: vec4): void;

/**
 *
 * @param {vec4} quat_1 
 * @param {vec4} quat_2 
 * @param {vec4} quat_out 
 */
export function multiplyQuaternion(quat_1: vec4, quat_2: vec4, quat_out: vec4): void;

/**
 *
 * @param {mat3} a_3x3 
 * @param {mat3} out_3x3 
 */
export function orthogonalize3x3(a_3x3: mat3, out_3x3: mat3): void;

/**
 *
 * @param {mat3} a_3x3 
 * @param {vec3} w_3 
 * @param {mat3} v_3x3 
 */
export function diagonalize3x3(a_3x3: mat3, w_3: vec3, v_3x3: mat3): void;

/**
 *
 * @param {mat3} a_3x3 
 * @param {mat3} u_3x3 
 * @param {vec3} w_3 
 * @param {mat3} vT_3x3 
 */
export function singularValueDecomposition3x3(a_3x3: mat3, u_3x3: mat3, w_3: vec3, vT_3x3: mat3): void;

/**
 *
 * @param {Number[]} A 
 * @param {Number[]} index 
 * @param {Number} size 
 */
export function luFactorLinearSystem(A: number[], index: number[], size: number): number;

/**
 *
 * @param {Number[]} A 
 * @param {Number[]} index 
 * @param {Number[]} x 
 * @param {Number} size 
 */
export function luSolveLinearSystem(A: number[], index: number[], x: number[], size: number): void;

/**
 *
 * @param {Number[]} A 
 * @param {Number[]} x 
 * @param {Number} size 
 */
export function solveLinearSystem(A: number[], x: number[], size: number): number;

/**
 *
 * @param {Number[]} A 
 * @param {Number[]} AI 
 * @param {Number} size 
 * @param {?} [index] 
 * @param {?} [column] 
 */
export function invertMatrix(A: number[], AI: number[], size: number, index?: any, column?: any): number;

/**
 *
 * @param {Number[]} A 
 * @param {Number} size 
 */
export function estimateMatrixCondition(A: number[], size: number): number;

/**
 *
 * @param {mat3} a_3x3 
 * @param {Number[]} w 
 * @param {Number[]} v 
 */
export function jacobi(a_3x3: mat3, w: number[], v: number[]): number;

/**
 *
 * @param {Number} numberOfSamples 
 * @param {Number[]} xt 
 * @param {Number} xOrder 
 * @param {Number[]} mt 
 */
export function solveHomogeneousLeastSquares(numberOfSamples: number, xt: number[], xOrder: number, mt: number[]): number;

/**
 *
 * @param {Number} numberOfSamples 
 * @param {Number[]} xt 
 * @param {Number} xOrder 
 * @param {Number[]} yt 
 * @param {Number} yOrder 
 * @param {Number[]} mt 
 * @param {Boolean} checkHomogeneous 
 */
export function solveLeastSquares(numberOfSamples: number, xt: number[], xOrder: number, yt: number[], yOrder: number, mt: number[], checkHomogeneous: boolean): number;

/**
 *
 * @param {String} hexStr 
 * @param {Number[]} outFloatArray 
 */
export function hex2float(hexStr: string, outFloatArray: number[]): number[];

/**
 *
 * @param {vec3} rgb An Array of the RGB color.
 * @param {vec3} hsv An Array of the HSV color.
 */
export function rgb2hsv(rgb: vec3, hsv: vec3): void;

/**
 *
 * @param {vec3} hsv An Array of the HSV color.
 * @param {vec3} rgb An Array of the RGB color.
 */
export function hsv2rgb(hsv: vec3, rgb: vec3): void;

/**
 *
 * @param {vec3} lab 
 * @param {vec3} xyz 
 */
export function lab2xyz(lab: vec3, xyz: vec3): void;

/**
 *
 * @param {vec3} xyz 
 * @param {vec3} lab 
 */
export function xyz2lab(xyz: vec3, lab: vec3): void;

/**
 *
 * @param {vec3} xyz 
 * @param {vec3} rgb An Array of the RGB color.
 */
export function xyz2rgb(xyz: vec3, rgb: vec3): void;

/**
 *
 * @param {vec3} rgb An Array of the RGB color.
 * @param {vec3} xyz 
 */
export function rgb2xyz(rgb: vec3, xyz: vec3): void;

/**
 *
 * @param {vec3} rgb 
 * @param {vec3} lab 
 */
export function rgb2lab(rgb: vec3, lab: vec3): void;

/**
 *
 * @param {vec3} lab 
 * @param {vec3} rgb An Array of the RGB color.
 */
export function lab2rgb(lab: vec3, rgb: vec3): void;

/**
 * Returns bounds.
 * @param {Number[]} bounds Output array that hold bounds, optionally empty.
 */
export function uninitializeBounds(bounds: number[]): number[];

/**
 *
 * @param {vec2} bounds The bounds to check.
 */
export function areBoundsInitialized(bounds: vec2): boolean;

/**
 * Compute the bounds from points.
 * @param {vec3} point1 The coordinate of the first point.
 * @param {vec3} point2 The coordinate of the second point.
 * @param {Number[]} bounds Output array that hold bounds, optionally empty.
 */
export function computeBoundsFromPoints(point1: vec3, point2: vec3, bounds: number[]): number[];

/**
 * Clamp some value against a range.
 * @param {Number} value The value to clamp.
 * @param {Number} minValue The minimum value.
 * @param {Number} maxValue The maximum value.
 */
export function clampValue(value: number, minValue: number, maxValue: number): number;

/**
 * Clamp some vector against a range.
 * @param {vec3} vector The vector to clamp.
 * @param {vec3} minVector The minimum vector.
 * @param {vec3} maxVector The maximum vector.
 * @param {vec3} out The output vector.
 */
export function clampVector(vector: vec3, minVector: vec3, maxVector: vec3, out: vec3): vec3;

/**
 *
 * @param {vec3} vector 
 * @param {vec3} out 
 */
export function roundVector(vector: vec3, out: vec3): vec3;

/**
 *
 * @param {Number} value 
 * @param {vec2} range 
 */
export function clampAndNormalizeValue(value: number, range: vec2): number;

/**
 * Get the scalar type that is most likely to have enough precision to store a
 * given range of data once it has been scaled and shifted
 */
export function getScalarTypeFittingRange(): void;

/**
 *
 */
export function getAdjustedScalarRange(): void;

/**
 * Check if first 3D extent is within second 3D extent.
 * @param {Extent} extent1 The first extent.
 * @param {Extent} extent2 The second extent.
 */
export function extentIsWithinOtherExtent(extent1: Extent, extent2: Extent): number;

/**
 * Check if first 3D bounds is within the second 3D bounds.
 * @param {Bounds} bounds1_6 The first bounds.
 * @param {Bounds} bounds2_6 The second bounds.
 * @param {vec3} delta_3 The error margin along each axis.
 */
export function boundsIsWithinOtherBounds(bounds1_6: Bounds, bounds2_6: Bounds, delta_3: vec3): number;

/**
 * Check if point is within the given 3D bounds.
 * @param {vec3} point_3 The coordinate of the point.
 * @param {Bounds} bounds_6 The bounds.
 * @param {vec3} delta_3 The error margin along each axis.
 */
export function pointIsWithinBounds(point_3: vec3, bounds_6: Bounds, delta_3: vec3): number;

/**
 * In Euclidean space, there is a unique circle passing through any given three
 * non-collinear points P1, P2, and P3.
 *
 * Using Cartesian coordinates to represent these points as spatial vectors, it
 * is possible to use the dot product and cross product to calculate the radius
 * and center of the circle. See:
 * http://en.wikipedia.org/wiki/Circumscribed_circle and more specifically the
 * section Barycentric coordinates from cross- and dot-products
 * @param {vec3} p1 The coordinate of the first point.
 * @param {vec3} p2 The coordinate of the second point.
 * @param {vec3} p3 The coordinate of the third point.
 * @param {vec3} center The coordinate of the center point.
 */
export function solve3PointCircle(p1: vec3, p2: vec3, p3: vec3, center: vec3): number;

/**
 * Determines whether the passed value is a infinite number.
 * @param {Number} value The value to check.
 */
export function isInf(value: number): boolean;

/**
 *
 */
export function createUninitializedBounds(): Bounds;

/**
 *
 * @param {Number[]} vector 
 */
export function getMajorAxisIndex(vector: number[]): number;

/**
 *
 * @param {Number} value The value to convert.
 */
export function floatToHex2(value: number): string;

/**
 *
 * @param {Number[]} rgbArray 
 * @param {string} [prefix] 
 */
export function floatRGB2HexCode(rgbArray: number[], prefix?: string): string;

/**
 * Convert RGB or RGBA color array to CSS representation
 * @param {RGBColor|RGBAColor} rgbArray The color array.
 */
export function float2CssRGBA(rgbArray: RGBColor | RGBAColor): string;

/**
 * Determines whether the passed value is a NaN.
 * @param {Number} value The value to check.
 */
export function isNan(value: number): boolean;

/**
 * Determines whether the passed value is a NaN.
 * @param {Number} value The value to check.
 */
export function isNaN(value: number): boolean;

/**
 * Determines whether the passed value is a finite number.
 * @param value The value to check.
 */
export function isFinite(value: any): boolean;

/**
 * vtkMath provides methods to perform common math operations. These include
 * providing constants such as Pi; conversion from degrees to radians; vector
 * operations such as dot and cross products and vector norm; matrix determinant
 * for 2x2 and 3x3 matrices; univariate polynomial solvers; and for random
 * number generation (for backward compatibility only).
 */
export declare const vtkMath: {
	createArray: typeof createArray;
	Pi: typeof Pi;
	radiansFromDegrees: typeof radiansFromDegrees;
	degreesFromRadians: typeof degreesFromRadians;
	round: typeof round;
	floor: typeof floor;
	ceil: typeof ceil;
	min: typeof min;
	max: typeof max;
	arrayMin: typeof arrayMin;
	arrayMax: typeof arrayMax;
	arrayRange: typeof arrayRange;
	ceilLog2: typeof ceilLog2;
	factorial: typeof factorial;
	gaussian: typeof gaussian;
	nearestPowerOfTwo: typeof nearestPowerOfTwo;
	isPowerOfTwo: typeof isPowerOfTwo;
	binomial: typeof binomial;
	beginCombination: typeof beginCombination;
	nextCombination: typeof nextCombination;
	randomSeed: typeof randomSeed;
	getSeed: typeof getSeed;
	random: typeof random;
	add: typeof add;
	subtract: typeof subtract;
	multiplyScalar: typeof multiplyScalar;
	multiplyScalar2D: typeof multiplyScalar2D;
	multiplyAccumulate: typeof multiplyAccumulate;
	multiplyAccumulate2D: typeof multiplyAccumulate2D;
	dot: typeof dot;
	outer: typeof outer;
	cross: typeof cross;
	norm: typeof norm;
	normalize: typeof normalize;
	perpendiculars: typeof perpendiculars;
	projectVector: typeof projectVector;
	dot2D: typeof dot2D;
	projectVector2D: typeof projectVector2D;
	distance2BetweenPoints: typeof distance2BetweenPoints;
	angleBetweenVectors: typeof angleBetweenVectors;
	gaussianAmplitude: typeof gaussianAmplitude;
	gaussianWeight: typeof gaussianWeight;
	outer2D: typeof outer2D;
	norm2D: typeof norm2D;
	normalize2D: typeof normalize2D;
	determinant2x2: typeof determinant2x2;
	LUFactor3x3: typeof LUFactor3x3;
	LUSolve3x3: typeof LUSolve3x3;
	linearSolve3x3: typeof linearSolve3x3;
	multiply3x3_vect3: typeof multiply3x3_vect3;
	multiply3x3_mat3: typeof multiply3x3_mat3;
	multiplyMatrix: typeof multiplyMatrix;
	transpose3x3: typeof transpose3x3;
	invert3x3: typeof invert3x3;
	identity3x3: typeof identity3x3;
	determinant3x3: typeof determinant3x3;
	quaternionToMatrix3x3: typeof quaternionToMatrix3x3;
	areEquals: typeof areEquals;
	areMatricesEqual: typeof areEquals;
	roundNumber: typeof roundNumber;
	roundVector: typeof roundVector;
	jacobiN: typeof jacobiN;
	matrix3x3ToQuaternion: typeof matrix3x3ToQuaternion;
	multiplyQuaternion: typeof multiplyQuaternion;
	orthogonalize3x3: typeof orthogonalize3x3;
	diagonalize3x3: typeof diagonalize3x3;
	singularValueDecomposition3x3: typeof singularValueDecomposition3x3;
	luFactorLinearSystem: typeof luFactorLinearSystem;
	luSolveLinearSystem: typeof luSolveLinearSystem;
	solveLinearSystem: typeof solveLinearSystem;
	invertMatrix: typeof invertMatrix;
	estimateMatrixCondition: typeof estimateMatrixCondition;
	jacobi: typeof jacobi;
	solveHomogeneousLeastSquares: typeof solveHomogeneousLeastSquares;
	solveLeastSquares: typeof solveLeastSquares;
	hex2float: typeof hex2float;
	rgb2hsv: typeof rgb2hsv;
	hsv2rgb: typeof hsv2rgb;
	lab2xyz: typeof lab2xyz;
	xyz2lab: typeof xyz2lab;
	xyz2rgb: typeof xyz2rgb;
	rgb2xyz: typeof rgb2xyz;
	rgb2lab: typeof rgb2lab;
	lab2rgb: typeof lab2rgb;
	uninitializeBounds: typeof uninitializeBounds;
	areBoundsInitialized: typeof areBoundsInitialized;
	computeBoundsFromPoints: typeof computeBoundsFromPoints;
	clampValue: typeof clampValue;
	clampVector: typeof clampVector;
	clampAndNormalizeValue: typeof clampAndNormalizeValue;
	getScalarTypeFittingRange: typeof getScalarTypeFittingRange;
	getAdjustedScalarRange: typeof getAdjustedScalarRange;
	extentIsWithinOtherExtent: typeof extentIsWithinOtherExtent;
	boundsIsWithinOtherBounds: typeof boundsIsWithinOtherBounds;
	pointIsWithinBounds: typeof pointIsWithinBounds;
	solve3PointCircle: typeof solve3PointCircle;
	isInf: typeof isInf;
	createUninitializedBounds: typeof createUninitializedBounds;
	getMajorAxisIndex: typeof getMajorAxisIndex;
	floatToHex2: typeof floatToHex2;
	floatRGB2HexCode: typeof floatRGB2HexCode;
	float2CssRGBA: typeof float2CssRGBA;
	inf: number;
	negInf: number;
	isNan: typeof isNaN,
	isNaN: typeof isNaN;
	isFinite: typeof isFinite
}
export default vtkMath;
